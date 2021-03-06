module.exports = function (RED) {
  function StriotFilter(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("filter", StriotFilter);
};