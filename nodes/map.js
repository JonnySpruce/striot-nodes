module.exports = function (RED) {
  function StriotMap(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("map", StriotMap);
};