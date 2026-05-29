---
type: "htb"
title: "HTB: Machine Name"
description: "One-line summary of the box: the key vulnerabilities and the path from foothold to root."
date: "2026-01-01"
box: "Machine Name"
difficulty: "medium"
os: "linux"
platform: "HackTheBox"
tags: ["htb", "linux", "web"]
draft: true
---

> This is a template. Set `draft: false` to publish. Rename the file to the box name (the filename becomes the URL slug).

## Recon

Start with the usual port sweep.

```bash
nmap -sC -sV -oA nmap/initial 10.10.x.x
```

Summarize what's exposed and what looks interesting.

## Enumeration

Dig into the services. Web directories, versions, anything that stands out.

```bash
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://10.10.x.x/FUZZ
```

## Foothold

How you got your first shell. Explain the vulnerability, not just the exploit.

```bash
# exploit / payload here
```

## Privilege Escalation

The path from low-priv user to root. What you found, why it worked.

```bash
# privesc steps
```

## Root

Final flag and a short reflection: what was the intended path, and did you find an unintended one?

## Lessons Learned

- Key takeaway #1
- Key takeaway #2
