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

![image](https://1drv.ms/i/s!AsJfVUEHse4xhAVIwP8MGp8jqxqc?embed=1&width=200&height=197)![image](https://1drv.ms/i/s!AsJfVUEHse4xhApibpAzqexoXi_w?embed=1&width=177&height=200)
