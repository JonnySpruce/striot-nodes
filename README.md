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

### Running

Start Node-RED from the terminal with the command `node-red`, and there will be a new section of nodes labelled **StrIoT**, where you will find all supported nodes for the [StrIoT](https://github.com/striot/striot/) system.

Simply drag and drop the nodes onto the canvas, and double click on a node to edit it's properties and add code etc.

### Exporting

From the Node-RED window, click the menu button in the top right corner, then **Export**, to view the export screen. Select the options you wish to use and then click **Download** to download the exported stream processing graph. You can then pass this JSON file to the [StrIoT GUI](https://github.com/JonnySpruce/striot-gui) program, which will automatically generate your inputs for the [StrIoT](https://github.com/striot/striot/) system.

## Nodes Added

| Name               | Description                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Filter             | Filters streams based on a user-defined function.                                                                   |
| Generic Input      | Allows any user-defined function to be used as an input to the stream.                                              |
| Sink               | Allows any user-defined function to be used as an ouput to the stream.                                              |
| Map                | Maps values in the stream based on a user-defined function.                                                         |
| Generation Options | Allows definition of the generation options, including imports, packages, presource code and optimisation settings. |
