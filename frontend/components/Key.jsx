var React = require('react'),
    Note = require('../util/Note.js'),
    TONES = require('../constants/Tones.js'),
    KeyStore = require('../store/KeyStore.js');

var Key = React.createClass({
  getInitialState: function(){
    return { this.prop.noteName }
  },
  componentDidMount: function(){
    this.note = new Note(TONES[this.prop.noteName]);
    addKeyListener(this.note);
  },
  componentWillUnmount: function(){
    removeKeyListener(this.note);
  },
  addKeyListener: function(note){
  },
  removeKeyListener: function(note){

  },
  render: function(){
    return(
      <div>{this.prop.noteName}</div>
    );
  }
});

module.exports = Key;
