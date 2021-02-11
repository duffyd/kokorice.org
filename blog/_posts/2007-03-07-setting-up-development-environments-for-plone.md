---
date: '2007-03-07'
author: duffyd
title: Setting Up Development Environments for Plone
tags:
  - zopeplone
  - linux
---

N.B. The examples assume you are using a Linux-based operating system.

1. Do a subversion checkout of the [instancemanager](https://href.li/?http://plone.org/products/instance-manager) product into an appropriate location, by entering the following:
```
svn co [http://svn.plone.org/svn/collective/instancemanager/trunk/](https://href.li/?http://svn.plone.org/svn/collective/instancemanager/trunk/) instancemanager
```
2. Install instancemanager by entering the following command from within the instancemanager folder (this will ensure instancemanager runs from the checked out directory and can be easily updated):
```
sudo python setup.py develop
```
3. The first time you run instancemanager (just type **instancemanager** and press Enter), it creates an **.instancemanager** directory in your home directory. There you’ll find a **userdefaults.py** that you can customise to your local needs.
The most relevant configuration directives you may want to change are the following:
```
zope_instance_template (where your zope instances will reside)
zope_location_template (the location where your zope server software resides - N.B. this can use python string substitution, e.g. /opt/zope/zope%(zope_version)s)
user (default admin username)
password (default admin password)
```
4. Following that, create a file called **PROJECTNAME****.py** (can be empty) in the **.instancemanager** directory, customising that with project-specific settings (just copy the few items that you want to change from **userdefaults.py**.
```
archive_basedir_template (the directory where all your zope/plone compressed product files are stored)
symlink_basedir_template (the directory where you store your svn product checkouts)
archivebundle_basedir_template (the directory where you store your zope/plone compressed product bundles - usually the same as archive_basedir_template)
symlinkbundle_basedir_template (the directory where you store your svn bundle checkouts - usually the same as symlink_basedir_template)
python (the path to your zope instance's python binary)
zope_version (the version of the zope instance that hosts your Plone site)
```
5. Instancemanager expects to find the python/zope server software in a structured folder hierarchy (e.g. **/opt/zope/zope2.9.6** and **/opt/python/python2.4.4**). I’ve found the easiest way to set this up is to use the Universal Installers listed on [plone.org](https://href.li/?http://plone.org/products/plone) and modify the configuration directives in the **install.sh** bash script to point to those locations (for example, instead of pointing to /opt/Plone-2.5/ have them point to /opt/zope/zope2.9.6 and /opt/python/python2.4.4 respectively).
6. Copy the Data.fs with your Plone site’s test data into the 
**zope_instance_template/datafs** folder, ensuring it’s renamed to **PROJECTNAME.fs**.
```
cp Data.fs ~/instances/datafs/PROJECTNAME.fs
```
7. Create the zope instance.
```
instancemanager fresh PROJECTNAME
```
8. All going well, you should now have a new zope instance created for your Plone site accessible via the standard methods, i.e. **http://localhost:8080/manage**
9. Some further documentation regarding instancemanager can be found [here](https://href.li/?http://svn.plone.org/svn/collective/instancemanager/trunk/README.txt).
Some of the commands I often use are:
```
instancemanager fresh PROJECTNAME (creates a new zope instance, including setting up all the Plone products as specified in the project file and also creates a new Plone site)
instancemanager --products PROJECTNAME (just recreates the Products directory and all contained products)
instancemanager soft PROJECTNAME (stops and starts the zope instance and reinstalls the products specified in the main_products configuration directive in the project file)
instancemanager test PROJECTNAME (runs the tests for the main Plone product specified in the project file)
instancemanager --test MyPloneProduct PROJECTNAME (runs the tests for the specified Plone product, i.e. MyPloneProduct)

```
