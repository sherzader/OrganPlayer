var ReactDOM = require('react-dom');
var React = require('react');
var Key = require('./components/Key');
var KeyListener = require('./util/KeyListener');

KeyListener.handleKeyup();
KeyListener.handleKeydown();

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('content');
  ReactDOM.render(<Key  noteName={"C4"}/>, root);
});
