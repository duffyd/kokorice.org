---
date: '2006-08-30'
author: duffyd
title: Setting Up Windows Active Directory LDAP Authentication In Plone 2.5
tags:
  - technical-info
  - zopeplone
---

[Emerge Technology](https://href.li/?http://www.emergetec.com) had an enquiry from a client recently regarding setting up authentication via Active Directory in Plone 2.5. I share our response here for the benefit of anyone else who wishes to do this (the test environment I setup included Microsoft Small Business Server 2003, Zope 2.9, and Plone 2.5):

> One recommendation I would have is that you install LDAPMultiPlugins1.2 (available from here [http://www.dataflake.org/software/ldapmultiplugins/ldapmultiplugins_1.2](https://href.li/?http://www.dataflake.org/software/ldapmultiplugins/ldapmultiplugins_1.2)) and remove LDAPUserFolderExt-0.41 (As per normal Zope Product installation procedures you will need to stop and start your Zope instance after installing the product).

Following this, do the following:

1. Go to acl_users and add a ‘ActiveDirectory Multi Plugin’
2. Go to 'Contents’ of the new plugin, go to 'acl_users’ and configure your LDAP settings there. You can test if it works correctly by searching for users via the 'Users’ tab 
3. Setup your LDAP Schema mappings to Plone fields in the 'LDAP Schema’ tab
4. Go back to the ActiveDirectory Multi Plugin and enable the functionalities you require in the 'Activate’ tab.
