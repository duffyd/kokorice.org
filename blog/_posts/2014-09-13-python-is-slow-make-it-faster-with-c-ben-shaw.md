---
date: '2014-09-13'
author: duffyd
title: 'Python is slow, make it faster with C - Ben Shaw'
tags:
  - zopeplone
  - kiwipycon
---

**C Module** - traditional way. Write your functions in C (usually just wrapper code).

CTypes - newer way since 2006. Integration a bit more difficult. Great to use if don’t need Python types, exceptions, & objects back.

CDLL: reference to DLL

Init module that sets up the module.

Pypy: libraries written in C may not work. No need to change Python code.

Pure C: 11.2x faster, Pypy: 5.7x faster.

Slides: [http://bbit.co.nz/blog/4/](https://href.li/?http://bbit.co.nz/blog/4/)
