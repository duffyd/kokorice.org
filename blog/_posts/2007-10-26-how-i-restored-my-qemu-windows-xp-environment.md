---
date: '2007-10-26'
author: duffyd
title: How I Restored My QEMU Windows XP Environment
tags:
  - linux
  - technical-info
---

Recently I had to setup [Enfold Server](https://href.li/?http://www.enfoldsystems.com/Products/Server) on Windows XP and as I run [Kubuntu](https://href.li/?http://www.kubuntu.org) on my notebook, the virtual environment I’ve chosen to run Windows under is [QEMU](https://href.li/?http://en.wikipedia.org/wiki/QEMU). I’ve been running QEMU for some time now and it provides all the features I need in a virtual machine, especially with [kqemu installed](https://href.li/?https://help.ubuntu.com/community/WindowsXPUnderQemuHowTo). When I was in the process of setting up Enfold Server, though, I accidentally loaded the same QEMU image twice and the 2nd instance started running a CHKDSK on the drive and writing to it. After closing the 2nd instance down and restarting the already running Windows XP QEMU instance, Windows XP would get as far as the loading Windows XP screen and then cyclicly boot. I then attempted to mount the QEMU image (as it was in the RAW format) but when I did, I got the following error message: “primary boot sector is invalid”. This was when alarm bells really started to ring as I’d put quite a lot of time and effort into this Windows XP QEMU image (including setting up all the Internet Explorer browsers and [Safari for Windows](http://www.apple.com/safari/download/)), and unfortunately due to a [file size error](https://href.li/?http://en.wikipedia.org/wiki/SIGXFSZ) I was getting when attempting to backup the QEMU image, I didn’t have a backup! After fruitlessly googling around for a resolution, I decided I’d attempt to boot off the Windows XP cdrom and attempt to recover the image that way. The following are the steps I took to restore my QEMU Windows XP Environment:

1. Booted off the Windows XP cdrom by typing the following at the command prompt:
*qemu winxp.img -cdrom /dev/cdrom -boot d*
2. When the “Welcome to Setup” screen appeared, pressed R to start the Recovery Console.
3. Executed the **FIXMBR** command from the Recovery Console.
4. Ran a **CHKDSK** to fixup any other problems that may have existed.
