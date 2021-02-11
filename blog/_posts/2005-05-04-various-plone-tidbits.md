---
date: '2005-05-04'
author: duffyd
title: Various Plone Tidbits
tags:
  - zopeplone
---

First of all, this is an old [news item](https://href.li/?http://www.oreillynet.com/pub/wlg/3957) (from 2003!) but it warmed the cockles of my heart to see that two [open source](https://href.li/?http://www.opensource.org) applications I use and am jealousy attached to featured as the two most popular open source projects - Plone and KDE.
Further, I’m not a Zope Security expert but security is not easy to setup in Plone; this [quote](https://href.li/?http://docs.neuroinf.de/PloneBook/ch9.rst) from Jim Fulton (chief Zope architect) puts it in persective ;-) For instance, today I created a role, which I wanted to have basically the same rights as the ‘Manager’ role but without the 'Manage Portal’ permission. Sounds simple enough? Wrong, as the 'Manage Portal’ permission is set to 'Acquire permission settings’ by default so I couldn’t work out how to revoke this permission for my role. Even after I managed to somehow achieve what I wanted, other strange things were occuring when managing the site. In the end I just did a bit of a hack to resolve my issue. I think I need to invest some time in learning to use the VerboseSecurity product.
