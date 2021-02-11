---
date: '2014-09-13'
author: duffyd
title: Packaging a Python desktop application using PyInstaller - Glenn Ramsey
tags:
  - zopeplone
  - kiwipycon
---

Gathers the dependencies for your script and puts them all in a directory. Doesn’t actually create an installer and doesn’t include the source code.

Works on Windows, OSX, Linux.

Works with Python 2.4-2.7.

Very well documented.

Alts: Py2app - OSX, Py2exe - Windows.

Launches a boot loader then launches your script.

Can choose one file mode or one directory (default) mode.

On first run it will create a spec file. One file is better for smaller scripts as has to decompress file as part of ‘install’.

OSX - extra step that creates app bundle.

Can’t include files outside the app dir.

sys._MEIPASS: directory where app is installed.

OSX: need to tell it not no create icon on dock when running ‘installer’.

collect_data_files: collects CSVs.

Hidden imports: for imports that PyInstaller can’t find.

OSX: CMake/CPack. make package.

Windows: NSIS.

Example program: [https://github.com/glennra/kpc2014](https://href.li/?https://github.com/glennra/kpc2014)

When debugging - run boot loader directly: CountryCode.app/Contents/MacOS/CountryCode

```
for b in a.binaries:
    print b

```
