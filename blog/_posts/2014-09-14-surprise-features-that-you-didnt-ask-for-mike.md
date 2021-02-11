---
date: '2014-09-14'
author: duffyd
title: Surprise features that you didn’t ask for - Mike Haworth
tags:
  - zopeplone
  - kiwipycon
---

Server Side Request Forgery

- Could access services on localhost
- Access other hosts in DMZ
- Bypass host-based authentication systems

Vulnerable systems:

- memcached
- couchdb

Urllib: accepts file://

Pycurl accepts gopher://

Memcached: gopher://127.0.0.1:11211/2get

Preventing: blacklist is error prone.

XML External Entity (XXE): 

Safer: [http://pypi.python.org/pypi/diffusedxml](https://href.li/?http://pypi.python.org/pypi/diffusedxml)

Signed cookies - session data is visible to user.

Also unless it’s got discount applied, just reapply discount. Can have a unique number that is issued each time we give discount.

Don’t use pickle as could execute shellcode but instead use JSON.

Pentesting challenges: [http://tinyurl.com/h4ckit](https://href.li/?http://tinyurl.com/h4ckit)
