var KeyStore = require('../stores/KeyStore.js'),
    TONES = require('../constants/Tones.js');

var Mapping = {
  //map TONES to keycode
};

var KeyListener = {
  handleKeyup: function(){
    $(document).on('keyup', function(e){
      KeyActions.keyPressed(e.target.noteName);
      console.log(e); //find keycode in event
    });
  },
  handleKeydown: function(){
    $(document).on('keydown', function(e){
      KeyActions.keyReleased(e.target.noteName);
      console.log(e); //find keycode in event
    });
  }
};


module.exports = KeyListener;
