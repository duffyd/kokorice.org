---
date: '2005-02-04'
author: duffyd
title: IE6 Disappearing Text Bug
tags:
  - cssxhtml
---

Just stumbled across the weirdest bug in [Internet Explorer 6](http://www.microsoft.com/windows/ie/default.mspx). I was replacing a table-based layout with [divs](https://href.li/?http://www.w3schools.com/tags/tag_div.asp) and the customer came back to me and said that they couldn’t see any of the link titles anymore. In [Firefox](https://href.li/?http://www.mozilla.org/products/firefox/) it was fine (what do you expect ;-) and in Internet Explorer 5.5 it was fine too. But when I opened up the site in Internet Explorer 6 some of the link titles were invisible. I could put my mouse pointer over them and click on them, so they were there, they just weren’t visible. If I tried to select them with the mouse they would come visible but if I deselected them they would disappear again. Weird!? Finally after [googling](https://href.li/?http://www.google.com) around I found this link which helped resolve my problem: [http://archivist.incutio.com/viewlist/css-discuss/5106](https://href.li/?http://archivist.incutio.com/viewlist/css-discuss/5106). Especially the recommendation to have a style=“position: relative” on a higher level containing div. Don’t you love google and the net ;-)
