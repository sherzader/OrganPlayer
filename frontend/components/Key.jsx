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
      this.note.start();
    } else {
      this.note.stop();
    }
  },
  componentDidMount: function(){

    //pass frequency to Note()
    this.note = new Note(TONES[this.props.noteName]);
    var currentNote = this._notesChanged;
    KeyStore.addListener(currentNote);
  },
  componentWillUnmount: function(){
    KeyStore.remove(this._notesChanged);
  },
  render: function(){
    return(
      <div className="keyNote" name={this.props.noteName}>
        {this.props.noteName}
      </div>
    )
  }
});

module.exports = Key;
