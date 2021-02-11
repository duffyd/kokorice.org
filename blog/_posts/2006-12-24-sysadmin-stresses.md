---
date: '2006-12-24'
author: duffyd
title: Sysadmin Stresses
tags:
  - technical-info
  - zopeplone
  - linux
---

This may be my last post as a sysadmin as like some [other people](https://href.li/?http://tomster.org/blog/archive/2006/07/16/fulltime-developer), I’ve discovered that being a sysadmin has its own challenges, most especially the need to be constantly available, as computer systems can fall over at any time. Something, though, that proved invaluable in my previous role was some Systems Monitoring software called [Zenoss](https://href.li/?http://www.zenoss.org) (another attraction was that it runs on [Zope](https://href.li/?http://zope.org)!).
After ensuring I had the prerequisite software, the installation wasn’t difficult. It was a bit of a nuisance that Zenoss creates its own Zope instance but the specific python products it installed within the Zope instance really required this for ease of setup.
Once the Zenoss server software was installed, I then had to configure the network devices to notify Zenoss via SNMP of their current status. Though the organisation where I worked had a few varied operating systems and devices, this wasn’t a problem. [SNMP Informant](https://href.li/?http://www.snmp-informant.com/) (with the [MBM module](https://href.li/?http://www.wtcs.org/informant/products.htm#MBM) for CPU, case, and component monitoring), Syslog, and Zenwin provided monitoring for the Windows 2003 server (there were some gotchas with the setup of the SNMP service but a big thanks to [#zenoss](https://href.li/?denied:irc://irc.freenode.net/zenoss) as they helped me resolve the particular issues I had). The [snmp package](https://href.li/?http://net-snmp.sourceforge.net/) took care of my Linux boxes and Zenoss’ builtin Cisco support provided monitoring for the Cisco router.
Once I had added all the network devices, I then setup Zenoss to send notifications via email whenever specified Zenoss events occured.
When Zenoss is notified of an event it categorises the event by such things as type of event, severity, etc. When Zenoss is unsure of how to categorise an event, you can categorise it manually. Zenoss can use this criteria for its event notification system.
Something that really impressed me about the Zenoss project was that when I subscribed to the mailing list, I requested a Zenoss t-shirt and though I live at the bottom of the world in New Zealand they sent me one!

![image](https://dm2301files.storage.live.com/y4muFf8pPsw8uY9qAwrptBDYh6KW6KN5L5G8RSHVtePfkcwGXBv2FFXEJNU1lz_Ks6LLTl5iXC9qtBxhQlTi_pt_zvTGzYwk-Dm-GYRjioj7m57s6EVADMoDEpot0pqFLsrQsqkbscHMB7X2hR2PrpGfm0WJf24uy_5cGribepB0fuOWqt5hr4Fd9cCZ0h4412t?width=200&height=197&cropmode=none)![image](https://dm2301files.storage.live.com/y4meQbj49QvKO3vAcwyUTWTlEXJM1gdNy2OyDVZijnRjBtgCRUdHrqfze8LY5HkIImcFZ2dS96MRBwYtGfAkc5h3tM_EduU5sAEM5wvjPkeGPhO8l8tOcJS50KBg-6kYc7FyWrr9qRPWjnWIsFtb1powaHQU0FNyWhqhYlEfspMcSz-lfIR6muQFvykEn_krvFW?width=177&height=200&cropmode=none)
