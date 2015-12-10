var ReactDOM = require('react-dom');
var React = require('react');
var Key = require('./components/Key');
var KeyListener = require('./util/KeyListener');
var TONES = require('./constants/Tones');

KeyListener.handleKeyup();
KeyListener.handleKeydown();

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('content');
  TONES.forEach(function(note){
    ReactDOM.render(<Key  noteName={note}/>, root);
  });
});
