---
date: '2014-09-13'
author: duffyd
title: Why Python Rocks Solaris - James McPherson
tags:
  - zopeplone
  - kiwipycon
---

“Python is a systems-programming language also”.

Why use? Lots of open source software uses Python.
pstack: see what Python process is doing.

Manage boot environment, managing package installation, build tools.

ZFS: “revolutionary file system”.

Solaris 11 now uses Image Packaging System (IPS).

Full distribution of OpenStack in Oracle Solaris 11.2.

Use OpenStack for internal Solaris development cloud.

“We use Mercurial as our SCM of choice”.

14.8M LoC for Solaris 11 and later. 97% C, 2% Python, 1% Java.

**Q&As**: How did you end up adopting Python? Is a developer culture at Sun, has always been developer-driven.

Can rollback from anything you’ve installed/etc if keep copies of boot environments. Can also compare boot environments.

Why Solaris? We scale and scale and scale. M7 is a monster-in-a-box so scales to that huge scale. Goes from 1 core to 1000s.
