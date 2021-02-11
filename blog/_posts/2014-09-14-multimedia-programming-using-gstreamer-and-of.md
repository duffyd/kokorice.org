---
date: '2014-09-14'
author: duffyd
title: >-
  Multimedia programming using Gstreamer (and, of course, Python) - Douglas
  Bagnall
tags:
  - zopeplone
  - kiwipycon
---

Pipelines consist of linked elements.

Elements:

- Link
- Source
- Sink (file, net, screen, etc)
- Demux, tee

```
$ gst-launch-1.0 filesrc location=video.ogv ! oggdemux ! theoradec ! autovideosink
  
```

playbin - just play file = mplayer

> Probably about 100 media players in world that are based on gstreamer

Muxer: combining 2 streams into 1 file.

Really good example - video wall.

Decode bin -> split into 4 streams (tee) -> queues (often freezes as all running in 1 thread and bump into eachother) -> crop (I.e. Remove 3/4s of video). And also play audio.

Can just use gstreamer cli syntax when calling gi calls in Python.

github: douglasbagnall

[http://gstreamer.freedesktop.org](https://href.li/?http://gstreamer.freedesktop.org)
