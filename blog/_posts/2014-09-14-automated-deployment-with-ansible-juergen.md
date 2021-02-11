---
date: '2014-09-14'
author: duffyd
title: Automated Deployment with Ansible - Juergen Brendel
tags:
  - zopeplone
  - kiwipycon
---

Configuration - system packages, settings, users, apps

CM Tools - describe the desired state. E.g. ensure all system packages are updated.

Puppet, chef - feel bit like working with Java.

Salt, Ansible - simple.

Ansible - orchestration engine. Written in Python. Uses YAML to write “playbooks”. Can use it to configure Windows.

No central configuration server/client (on target).

Just needs SSH access and Python on target machine.

Modules - 100s of them. They know how to do stuff.

Deletes module code from target after running it on target.

Can define groups to operate against.

group_vars directory/ all, groupname1

Ansible ‘cloud’ modules: AWS, Docker.

Modules: all output to stdout + JSON.

[https://github.com/jbrendel/ansible_cluster_setup](https://href.li/?https://github.com/jbrendel/ansible_cluster_setup)
