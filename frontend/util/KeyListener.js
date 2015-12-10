var KeyStore = require('../stores/KeyStore.js'),
    TONES = require('../constants/Tones.js'),
    KeyActions = require('../actions/KeyActions');

var Mapping = {
  //map keyCode to noteName
  65: "C4",
  87: "C4/D4",
  83: "D4",
  82: "D4/E4",
  70: "E4",
  71: "F4",
  89: "F4/G4",
  72: "G4",
  84: "G4/A4",
  74: "A4",
  73: "A4/B4",
  75: "B4"
};

var KeyListener = {
  handleKeyup: function(){
    $(document).on('keyup', function(e){
      var note = Mapping[e.keyCode];
      KeyActions.keyReleased(note);
      console.log(e);
    });
  },
  handleKeydown: function(){
    $(document).on('keydown', function(e){
      var note = Mapping[e.keyCode];
      KeyActions.keyPressed(note);
      console.log(e);
    });
  }
};


module.exports = KeyListener;
