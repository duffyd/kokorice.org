---
date: '2014-09-14'
author: duffyd
title: >-
  2nd Keynote: A Snake in Space - The rise of scientific Python in Astrodynamics
  and Astronomy - Francesco Biscani
tags:
  - zopeplone
  - kiwipycon
---

Max Planck Institute for Astronomy, European Space Agency.

PaGMO and Astropy - will mainly talk about PaGMO as wrote this and more familiar with this.

**PaGMO** - Parallel Global Multiobjective Optimiser. Optimisation tool. Initially a trajectory optimisation tool, evolved as a general-purpose optimiser.

Focused on parallel and distributed computing. Can use via C++ or Python.

**[Astropy](https://href.li/?http://www.astropy.org)** - community effort to develop a single core package for Astronomy.

**Optimisation** - a large area of applied mathematics. “The selection of a best element (with regard to some criteria) from some set of available alternatives.” E.g. Travelling salesman (TSP).

E.g. algorithms: gradient-based methods, evolutionary algorithms, stochastic algorithms.

**Interplanetary trajectories** - space mission trajectories are defined by sets of parameters: launch date, initial velocity vector, sequence of flybys, sequence of deep-space manoeuvres (DSM).

Usually we want to minimise fuel consumption.

The resulting optimisation problem is hard: multimodal objective function, highly nonlinear, highly dimensional.

Traditionally tackled by teams of **human experts**.

- genetic algorithms
- differential evolution
- ant-colony optimisation
- artificial bee-colony optimisation

**Island model** - name inspired by Darwin’s trip to the Galápagos Islands.

**History of PaGMO** - pattern of scientific programming code: created as part of some research and then abandoned for many years; not useable by anyone else and then picked up later and made more *consumable* by others.

Initially created Python bindings to initially created C/C++ ‘research’ code (2008-2009) and followed 'eat own dog food’ approach by using it a lot for internal research. Been through 2 GSoCs and now 'fully-fledged’ open source project.

- Emphasis on correctness & reproducibility
- Powerful driver for innovations in HPC

- Wheel re-invention
- Code is often written with a one-paper-horizon mindset
- Most scientists are not trained in software engineering

- The abstract island class includes a problem, an algorithm and a population of candidate solutions, and a virtual *evolve()* method that dispatches the optimisation (to a thread or a process on another machine)

Implemented via Boost.Python.

- serialisation across language boundaries involving virtual classes, base pointers, etc

- extension from Python of C++ base classes

- working around some of Python’s limitation wrt parallel programming (GIL)

- Scientific Python stack: NumPy (crunching results), SciPy (optimisation algorithms), matplotlib, IPython, etc

PaGMO uses: evolution of neural networks for autonomous Martian rovers, selection of Near Earth Asteroids for future human missions.

- Handle practical needs of astronomers: units, coordinates, FITS files, cosmological calculations

- “One of best community packages ever seen”

- Not research package like PaGMO

- Heavy reliance on NumPy
