# Striot Nodes for Node-RED

This repository adds a number of Nodes to Node-RED, which replicate the various functions offered by the [StrIoT](https://github.com/striot/striot/) project, which is a Haskell-based pure functional stream processing system.

These nodes do not run within Node-RED, and instead Node-RED is simply used as a UI to build your stream-processing graphs. Once you have created your graph, you can use Node-RED to export it as a JSON file, which can then be read in and processed by the [StrIoT GUI](https://github.com/JonnySpruce/striot-gui) program, which generates inputs for [StrIoT](https://github.com/striot/striot/), so that you can quickly and easily develop stream processing graphs for [StrIoT](https://github.com/striot/striot/).

The nodes take Haskell code as input, which allows for flexible and powerful stream processing applications to be developed. See the **Nodes Added** section below for more information on the nodes which this repository add to Node-RED.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Node-RED](https://nodered.org/)
- Node-RED must have been run at least once using the `node-red` command in the terminal.

### Installation

This package is not currently published on NPM or other package managers, so simply git clone this repository onto your system:

`$ git clone https://github.com/JonnySpruce/striot-nodes.git`

Then in your Node-RED directory, simply install the nodes by running:

`npm i /path/to/cloned/repository`

The next time you start Node-RED, there will be a new section of nodes labelled **StrIoT**, where you will find all supported nodes for the [StrIoT](https://github.com/striot/striot/) system.

## Nodes Added

| Name   | Description                                                                                               |
| ------ | --------------------------------------------------------------------------------------------------------- |
| Filter | Takes one input and one output and filters the input based on the Haskell function you write in the node. |
