---
date: '2005-03-25'
author: duffyd
title: Rehashed Koko Araisa
tags:
  - zopeplone
---

I’ve been working on migrating my blog from SimpleBlog to [Quills](https://href.li/?http://developer.etria.com/projects/quills) for a little while now, and finally completed my migration [script](https://href.li/?http://www.python.org) tonight! The steps I followed to achieve this are as follows:

1. Created a migrateSimple2Quills.py python script in my zopeinstance/Extensions folder (N.B. The script will create a new Quills instance in the root of your Plone site with an id of ‘blog’. To change these defaults edit the  quillsBlog variable in the script).
2. Created an External Method in the root of my Plone site with the following details
Id: migrateSimple2Quills
Module Name: migrateSimple2Quills
Function Name: migrateBlog
3. After saving the External Method I went into it and clicked on the 'Test’ tab at the top. This will migrate your SimpleBlog entries over.

4. Now go into the Drafts folder of your Quills blog (you need to be in the folder_contents view) and select all the blog entries and click the 'Change State’ button. Then click Publish (N.B. You might also need to publish your Quills blog).
5. All done!
