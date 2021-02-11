---
date: '2014-09-13'
author: duffyd
title: Intro to flask-security - Beau Butler
tags:
  - zopeplone
  - kiwipycon
---

Why Flask? Steep Django learning curve. Like to start simple and then become more complex.

App example code: [http://github.com/oddy/bangingminimal](https://href.li/?http://github.com/oddy/bangingminimal)

Don’t get **Async** mail sending, **Pretty** forms.

You get: sess auth + RBAC, base users db, all std workflows, passwd crypto, token/JSON auth.

pip install flask flask-security flask-SQLAlchemy pyBcrypt paste

Google: Prove Domain ownership - use button option.

Black box testing: Know lots of hackers.

Need motivate hackers - apply drink.

How hacked? ARP Redir (had PC on same subnet), SSLSplit, click forgot password, intercept reset URL, reset URL.

**Actual hack - other PC pretending to be Google SMTP server (on same subnet) intercepted program call and passed call on to Google SMTP server and hacker’s app.**

Py smtplib doesn’t check Google’s cert! 2.x smtplib can’t do it at all.

Admin Ronacher FTW.

Flask-Sec RBAC itself **still not broken**.

Have a go: [pwnoddy.com](https://href.li/?http://pwnoddy.com).
