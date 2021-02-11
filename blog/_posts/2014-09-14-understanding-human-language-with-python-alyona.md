---
date: '2014-09-14'
author: duffyd
title: Understanding human language with Python - Alyona Medelyan
tags:
  - zopeplone
  - kiwipycon
---

Android Auto: hands-free operation via voice commands.

WordLense: “augmented reality translation”

“Her” movie in reality: “Siri will you marry me? Siri doesn’t seem to be available.”

Segmentation complexities.

Disambiguation complexities. E.g. Flying planes can be dangerous.

Categories - taxonomy terms, entities - biological/chemical, sentiment.

NKTK - Python toolkit for NLP.

How to get to the core words? Remove stopwords.

```
from nltk.corpus import stopwords
from nltk.tokenizie import word_tokenize

```

Keyword scoring: TFxIDF

Gensim:

```
from gensim import corpora, models

```

When ranking words can use score to discard them.

Text Categorisation with NLTK

Sentiment Analysis:

```
from textblob import TextBlob

```

[http://deeplearning.net/software/theano](https://href.li/?http://deeplearning.net/software/theano)

[http://textblob.readthedocs.org](https://href.li/?http://textblob.readthedocs.org)

[http://scikit-learn.org/stable](https://href.li/?http://scikit-learn.org/stable)

[http://nltk.org](https://href.li/?http://nltk.org)

[http://radimrehurek.com/gensim](https://href.li/?http://radimrehurek.com/gensim)

[http://github.com/zelandiya/KiwiPyCon-NLP-tutorial](https://href.li/?http://github.com/zelandiya/KiwiPyCon-NLP-tutorial)
