---
date: '2014-09-14'
author: duffyd
title: 'PyPy.js: What? How? Why? - Ryan Kelly'
tags:
  - zopeplone
  - kiwipycon
---

@rfkelly

**Mozilla** - protecting & promoting the web.

The Web? Technology + Culture (open - don’t need to submit to ‘web pool’, ubiquitous, secure, trustworthy)

> “For Mozilla, anything that the Web can’t do, or anything that the Web is not faster and better at than native technologies, is a bug. We should file it in our Bugzilla system, so we can start writing a patch to fix it” - Andreas Gal (Mozilla CEO)

```
var vm = new PyPyJS()
import js
js.eval()
```

An experiment in building a fast, compliant, in-browser Python environment.

PyPy.js is … Not so Fast. Incompatibilities between the JIT compilers.

Is … Humongous.

How? PyPy + Emscripten.

Emscripten: an LLVM backend that generates JavaScript.

> “It’s awful all the way down”

Alts: [http://GitHub.com/PythonJS](https://href.li/?http://GitHub.com/PythonJS)

“Please, file bugs against the Web”

[http://pypyjs.org](https://href.li/?http://pypyjs.org)

[http://github.com/rfk/talk-pypyjs-what-how-why](https://href.li/?http://github.com/rfk/talk-pypyjs-what-how-why)
