---
date: '2014-09-14'
author: duffyd
title: Deploying a Django application using Juju - Tim Penhey
tags:
  - zopeplone
  - kiwipycon
---

Or **“How I used Juju to deploy my Django app up to AWS”**

Used **[backbone.js](https://href.li/?http://backbonejs.org)**

Juju is written in Go. Service orchestration in the cloud.

- Encapsulate application configurations
- Define how services get deployed

- PostgreSQL
- Python-Django
- Gunicorn

Juju can help with scaling later.

Simple repeatable deployments.

Writing a subordinate charm.

Hooks are just scripts. Used **Install** hooks and **Everything else** hooks.

Promoted charms are only ones that are officially available.

“As a Juju core developer it was interesting that if I didn’t know the value that Juju would give me later, I would’ve thrown it out ages ago.”

Insufficient documentation around using the Python-Django charm, had to read the code.

Insufficient documentation around how to write a payload charm for Python-Django, very much work it out as you go.

Python-Django and gunicorn still needs nginx to be really useful.

Should have a full stack Django charm.

```
juju bootstrap|deploy|add-relation|deploy|expose

```
