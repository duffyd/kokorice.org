---
date: '2014-09-13'
author: duffyd
title: >-
  External dependencies in web apps: system libs are not that scary - Francois
  Marier
tags:
  - zopeplone
  - kiwipycon
---

Common example: 250 external dependencies, 8 different copies of same app, 4 different versions.

Have to patch same app 4x.

1. Only use Python libraries that are packaged for Debian.

2. Only use the version from the latest Debian release (stable).

Uses fabric to deploy libravatar app.

Result? Limited choice of Python libraries. Sometimes have to choose a less interesting library.

apt-cache search ^python = 2248

Cannot use the latest features. “Don’t know what’s in Django 1.7 so don’t miss anything”.

“Once every 1 or 2 years have to upgrade distro so not too bad and wasn’t too major”.

Optimising for sysadmins instead of developers.

Currently working on Vagrant script to help newcomers install it.

Non-minified jQuery. Have to minify in build step.

Cannot easily use unattended-upgrades. Django sometimes disables features as they’re fundamentally broken and when you do unattended-upgrades the feature you’re relying on suddenly is no longer available.

apticron - span you every day re. available upgrades until you upgrade.

Security updates not always timely in distros.

Only takes a single Debian user to file a security bug to start the process of getting it all fixed.

**Is it realistic?** After announcing talk a dev in Russia contacted Francois and said that is using exact same approach for [SkyDNS](https://www.skydns.ru).

Not your full-time job.

Uses a mature framework, e.g. NodeJS changing too quickly.

Consulting company, e.g. Catalyst IT. Small clients don’t like paying lots for system maintenance.

Distros abstract away all the language-specific incompatibilities.
