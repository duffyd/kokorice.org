---
date: '2007-02-13'
author: duffyd
title: Achieving Server Xen
tags:
  - technical-info
  - linux
---

Recently I had to setup Xen  3 for a client, and the following are the steps I undertook to install it (N.B. As a guide for the installation, I followed the instructions listed [here](https://href.li/?http://www.cosmocode.de/en/blogs/gohr/20070130123639/index.html)).

The most pertinent hardware specifications for the server we installed Xen 3 on are as follows:

- 2x Intel Xeon 1.6 Ghz CPUs
- 4GB DDR2-667 RAM
- 3ware [9550SX-4LP](https://href.li/?http://www.3ware.com/products/serial_ata2-9000.asp) PCI-X-to-SATA II RAID controller
- 4x Seagate [Barracuda ES](https://href.li/?http://www.seagate.com/ww/v/index.jsp?locale=en-US&name=Barracuda_ES_SATA_3.0Gb/s_250-GB_Hard_Drive&vgnextoid=885199f4fa74c010VgnVCM100000dd04090aRCRD&vgnextchannel=98eab3eeb8f6d010VgnVCM100000dd04090aRCRD&reqPage=Model) SATA 3.0GB/s 250GB hard drives (configured as RAID 5)

1. Firstly, I downloaded and burned the [Debian testing](https://href.li/?http://www.debian.org/releases/testing/) (etch) [netinst CD image](https://href.li/?http://cdimage.debian.org/cdimage/etch_di_rc1/i386/iso-cd/debian-testing-i386-netinst.iso) to CD.
2. Following this, I began installing Debian etch on the server using the netinst CD.
At the disk partitioning screen, I setup the hard drive as follows:
```
Disk /dev/sda: 749.9 GB, 749966721024 bytes

255 heads, 63 sectors/track, 91178 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1         365     2931831   83  Linux
/dev/sda2             366        1581     9767520   8e  Linux LVM
/dev/sda3            1582        4013    19535040   82  Linux swap / Solaris
/dev/sda4            4014       91178   700152862+  8e  Linux LVM

```
N.B. The **/dev/sda4** LVM partition is where the logical volumes for the Xen guest domains (virtual servers) are to be stored.
I left the rest of the installation steps at their setup defaults.

3. I then installed Xen 3 on the server by entering the following command:
```
apt-get install xen-linux-system-2.6.18-3-xen-686 xen-tools \\ 
     xen-docs-3.0 libc6-xen file xen-hypervisor-3.0.3-1-i386-pae \\ 
     xen-linux-system-2.6.18-3-xen-vserver-686 bridge-utils
```
4. Following this, I made the following change in the **/etc/xen/xend-config.sxp** file and rebooted the server:
replace
```
(network-script network-dummy)
``` 
 with 
```
 (network-script 'network-bridge netdev=eth0') 
```
5. I now made the following changes to the **/etc/xen-tools/xen-tools.conf** file:```

lvm = vservers
debootstrap = 1
size   = 10Gb
memory = 512Mb
swap   = 1Gb
fs     = reiserfs
dist   = etch
image  = sparse
kernel = /boot/vmlinuz-2.6.18-3-xen-vserver-686
initrd = /boot/initrd.img-2.6.18-3-xen-vserver-686
mirror = [http://debian.orcon.net.nz/debian](https://href.li/?http://debian.orcon.net.nz/debian)
```

6. Following this, I created a new guest domain (or virtual server) on the server by entering the following command:
```
xen-create-image --hostname myservername.mydomain.co.nz --dhcp
```
7. I then booted the guest domain by entering the following:
```
xm create /etc/xen/myservername.mydomain.co.nz.cfg
```

8. I now connected a virtual console to my newly created guest domain by entering the following and then logged on as root:
```
xm console myservername.mydomain.co.nz
```
9. Finally, I set the root password and then logged off the 
virtual console by typing **CTRL+]** and then made a ssh connection to the guest domain and started setting up the services on it.
