---
date: '2007-01-28'
author: duffyd
title: Back In The Plone Saddle
tags:
  - zopeplone
---

After a [brief interlude](/), I’m back developing in [Plone](https://href.li/?http://plone.org) again. I think, like myself, most Plone developers have found that Plone has increased in popularity and that they are finding themselves inundated with work. It’s no wonder that this has happened, as Plone has progressed from being just a visual style for the [Zope](https://href.li/?http://www.zope.org) [CMF](https://href.li/?http://www.zope.org/Products/CMF/) (as when I started developing in Plone back in November 2003 when it was at version 1.0.5) to a fully fledged Enterprise [CMS](https://href.li/?http://en.wikipedia.org/wiki/Content_management_system). Some of the more recent features introduced in Plone 2.5 being:

- the [Pluggable Authentication Service](https://href.li/?http://plone.org/documentation/glossary/pas) (PAS)
- [Placeful workflow support](https://href.li/?http://plone.org/products/plone/roadmap/52)
- [GenericSetup](https://href.li/?http://plone.org/documentation/tutorial/understanding-and-using-genericsetup-in-plone) support to allow site structure/settings to be defined in XML [profiles](https://href.li/?http://plone.org/documentation/tutorial/borg/setup-using-genericsetup)

Some of the up-and-coming features in [Plone 3.0](https://href.li/?http://plone.org/products/plone/releases/3.0) are:
- a much improved [administrative engine for portlets](https://href.li/?http://plone.org/products/plone/roadmap/118)
- [AJAX](https://href.li/?http://en.wikipedia.org/wiki/AJAX)-ifying the [administrative interface](https://href.li/?http://plone.org/products/plone/roadmap/121)
- ensuring [link integrity](https://href.li/?http://plone.org/products/plone/roadmap/125)
- prevent concurrent through-the-web editing via [locking](https://href.li/?http://plone.org/products/plone/roadmap/145)
- support for [indexing Word, PDF and other common types](https://href.li/?http://plone.org/products/plone/roadmap/177)
- in-place [content staging](https://href.li/?http://plone.org/products/plone/roadmap/168)

Just some further reasons why Plone is a very popular CMS platform.

My recent work for [some](https://href.li/?http://www.zestsoftware.nl) [of](https://href.li/?http://www.3months.com) [my](https://href.li/?http://www.endev.co.nz) [clients](https://href.li/?http://www.bcmpweb.com) has also given me an opportunity to catch up on some of the more recent Plone development tools. Following are some of the development tools I see as necessary for any Plone developer developing in Plone 2.5:
- [Clouseau](https://href.li/?http://plone.org/products/clouseau) - this tool works with Plone 2.1.x and Plone 2.5.x (though it won’t display the properties on objects in Plone 2.1.x) and enables you to do live debugging of your Plone site via a web browser. I’ve lost count of the number of times I have recommended Clouseau to newbie Plone developers on [#plone](https://href.li/?denied:irc://freenode.net#plone) recently. And thanks a lot [Andy](https://href.li/?http://www.agmweb.ca/blog/) for your efforts in developing this invaluable tool! (+ [those who aided](https://href.li/?http://www.agmweb.ca/blog/?p=40) you in its development).
- [ArchGenXML](https://href.li/?http://plone.org/products/archgenxml) - there is an excellent [tutorial](https://href.li/?http://plone.org/documentation/tutorial/archgenxml-getting-started/) by           [Jens W. Klein](https://href.li/?http://plone.org/author/jensens) on plone.org regarding this essential Plone development tool.
- [ArgoUML](https://href.li/?http://argouml.tigris.org/) - an open source UML editor that can be loaded with a [default model](https://href.li/?http://plone.org/products/archgenxml/issues/30) that contains many of the data types, stereotypes and tagged value definitions for ArchGenXML.
- [Eclipse](https://href.li/?http://www.eclipse.org) - [Mikko Ohtamaa](https://href.li/?http://plone.org/author/miohtama) wrote a [tutorial](https://href.li/?http://plone.org/documentation/how-to/developing-plone-with-eclipse-ide/) on plone.org regarding using this IDE to develop in Plone.
- [Instance manager](https://href.li/?http://plone.org/products/instance-manager/) - a great tool by [Zest Software](https://href.li/?http://www.zestsoftware.nl) that simplifies the process of creating Zope instances, product installation, restarting, and quick-reinstalling.
- [Firebug](https://href.li/?http://www.getfirebug.com/) - if you skin Plone websites this is a [“must-have”](https://href.li/?http://matthew.delmarters.com/weblog/firebug-10-a-must-have/).
- [Some](https://href.li/?http://the.taoofmac.com/space/Python/Grimoire) [other](https://href.li/?http://docs.neuroinf.de/PloneBook/) [links](https://href.li/?http://wiki.zope.org/ZPT/FrontPage) that may prove useful.
