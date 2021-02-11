---
date: '2014-09-13'
author: duffyd
title: Java for Python Developers - Chris Neugebauer
tags:
  - zopeplone
  - kiwipycon
---

One company who likes Python but in reality likes Java a lot more = …. Google!

.java -> [compiler] -> JVM ByteCode -> JVM

Jython - setuptools - make .jars

```
from java.Lang.system
```What can do in Python 2.7 can also do in Jython.

Android devices outsold full-size computers 2x.

Dalvik Virtual Machine = Android Runtime (ART)

.java -> [compiler] -> .dex (Dalvik exe) -> DVM

No dynamic 3rd-party libraries. All statically compiled into Dalvik exe.

Java Native Interface (JNI).

[Kivy](https://href.li/?http://kivy.org)

Python-For-Android: Cpython API for Java.

```
from jnius import autoclass

```

PyJnius runs on Android!

JNI method signatures are a nightmare.

If Java’s more important, use Jython! Support for C extensions is not complete.

If Python’s more important, use PyJnius!

Jython is corporate sponsored by Sun.

2.7 support on Jython is only recent.

Kivy doesn’t have a very native look-and-feel. They say they’re working on this but “they don’t know what they’re talking about”.

Toga aims to use the native APIs for theming but currently has no Android support.
