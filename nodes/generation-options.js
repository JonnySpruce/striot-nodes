module.exports = function(RED) {
  function StriotGenerateOpts(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("generate-options", function(msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("generate-options", StriotGenerateOpts);
};
