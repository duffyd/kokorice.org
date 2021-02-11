---
date: '2005-02-10'
author: duffyd
title: From the Geek File
tags:
  - zopeplone
---

I spent all of this morning creating a [workflow](https://href.li/?http://docs.neuroinf.de/PloneBook/ch8.rst) script that would email a pdf, which was attached to a [CMF](https://href.li/?http://zope.org/Products/CMF/index.html) File. A [snippet](https://href.li/?http://zopewiki.org/ZopeBookChapter13AdvancedDTML) in the [zopewiki](https://href.li/?http://zopewiki.org) really helped, especially the DTML Method called *sendresume*.
Another time saver for zope developers is the [External Editor](https://href.li/?http://www.zope.org/Members/Caseman/ExternalEditor). Until today I was unsure of how to set which editor it would choose when opening a file in [zope](https://href.li/?http://zope.org) (so I was editing stuff in all sorts of weird and wonderful things). I then had a proper look through $HOME/.zope-external-edit and worked out how to set editors for different file types. The only remaining problem is that [OpenOffice.org](https://href.li/?http://openoffice.org) detaches itself from External Editor when it runs, therefore not allowing you to save changes back up to zope! This helpful [link](https://href.li/?http://zope.org/Members/enno/howto_webdav_zopeedit) (courtesy of paul from [TheVirtual](https://href.li/?http://www.thevirtual.co.nz)) solved this problem :-) .. Remember standard disclaimer regarding use of this howto applies ;-)
And finally another helpful tip I discovered today which is going to prove very helpful for my future [blogging](/) is that by using the [CMFPhoto](https://href.li/?http://prdownloads.sourceforge.net/collective/CMFPhoto-0.5.0.tar.gz?download)
product you can then create urls of the form
 **[http://mysite.com/mypicture/variant/xsmall](https://href.li/?http://mysite.com/mypicture/variant/xsmall)** and it will automagically
resize the image to a sensible size for use in my blog entries. This
saves lots of time and hassle using a imaging [program](https://href.li/?http://gimp.org) to resize it all the time. HTH.
