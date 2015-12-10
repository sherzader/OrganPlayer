var ReactDOM = require('react-dom');
var React = require('react');
var Key = require('./components/Key.jsx');
var KeyListener = require('./util/KeyListener');
var Organ = require('./components/organ.jsx');

KeyListener.handleKeyup();
KeyListener.handleKeydown();

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('content');
  ReactDOM.render(<Organ />, root);
});
