# Overview

This repository contais the source code regarding the work *A Feature-Based Approach to Develop Digital Board Games*, submitted to the ICEC 2019. It includes the interpreter for board game features, some board game configuration files and a web client capable of presenting them.

It also includes a complete image of the proposed feture model as an [SVG file](./featuremodel/BoardGameICEC2019.svg) as well as a [GFM File](./featuremodel/BoardGameICEC2019.gfm.json), which can be viewed at [https://glencoe.hochschule-trier.de/webapp/](https://glencoe.hochschule-trier.de/webapp/).

### Setting up

To run this project, clone or download the repository into the document root of an http server. Alternatively, you can use a simple command-line http server such as [this](https://www.npmjs.com/package/http-server) (requires [Node.js](https://nodejs.org/)). Visit [http://localhost:8080](http://localhost:8080) to see the web client running.

In order to run the [Plato Code Analysis Tool](https://www.npmjs.com/package/plato) to collect the static code metrics, you will need [Node.js](https://nodejs.org/). With Node.js installed, run ```npm install``` to download the dependencies from the *[package-lock.json](./package-lock.json)* file, then run the helper script with ```node analyzeCode.js```.