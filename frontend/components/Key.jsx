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
      // this.note.start();
    }
    this.note.start();
    this.note.stop();
  },
  componentDidMount: function(){

    //pass frequency to Note()
    this.note = new Note(TONES[this.props.noteName]);
    var currentNote = this._notesChanged();
    this.token = KeyStore.addListener(currentNote);
    KeyStore.__onDispatch({
      actionType: "KEYDOWN",
      noteName: this.props.noteName
    });
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
