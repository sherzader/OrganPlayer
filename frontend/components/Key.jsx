var React = require('react'),
    Note = require('../util/Note.js'),
    KeyStore = require('../stores/KeyStore.js'),
    TONES = require('../constants/Tones.js');

var Key = React.createClass({
  getInitialState: function(){
    return ({ active: false });
  },
  _notesChanged: function(){
    if (KeyStore.all().indexOf(this.props.noteName) !== -1 ){
      this.setState( { active: true });
    }
  },
  componentDidMount: function(){
    this.note = new Note(TONES[this.props.noteName]);
    this.token = KeyStore.addListener(this._notesChanged);
  },
  componentWillUnmount: function(){
    KeyStore.remove(this.token);
  },
  render: function(){
    return(
      <div>{KeyStore.all().map(function(key){
          <li key={key.id}>{key.noteName}</li>
        })};
      </div>
    );
  }
});

module.exports = Key;
