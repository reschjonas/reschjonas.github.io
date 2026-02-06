---
title: "IDOR to Account Takeover — A Real-World Case Study"
description: "Walkthrough of an IDOR vulnerability that allowed full account takeover by manipulating API endpoint parameters."
date: "2026-02-06"
category: "web"
tags: ["idor", "api", "account-takeover", "bug-bounty"]
draft: true
---

# IDOR to Account Takeover — A Real-World Case Study

> This is an example writeup. Replace it with your actual content.

## Summary

During a security assessment of a web application, I discovered an Insecure Direct Object Reference (IDOR) vulnerability in the user profile API endpoint that allowed any authenticated user to modify other users' account details, including email addresses — effectively leading to a full account takeover.

## Discovery

The application's profile update endpoint accepted a user ID parameter:

```http
PUT /api/v1/users/1337/profile
Content-Type: application/json
Authorization: Bearer <token>

{
  "email": "attacker@evil.com",
  "name": "Updated Name"
}
```

By simply changing the user ID in the URL path, an attacker could modify any user's profile without additional authorization checks.

## Impact

- **Severity**: Critical
- **CVSS**: 9.1
- Full account takeover via email change + password reset
- Affects all registered users
- No rate limiting on the endpoint

## Remediation

The vendor implemented server-side authorization checks to verify the authenticated user's ownership of the requested resource before processing any modifications.

## Timeline

| Date | Event |
|------|-------|
| 2026-01-15 | Vulnerability discovered |
| 2026-01-16 | Report submitted to vendor |
| 2026-01-20 | Vendor acknowledged |
| 2026-02-01 | Patch deployed |
| 2026-02-06 | Public disclosure |
