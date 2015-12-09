var KeyStore = require('../stores/KeyStore.js'),
    TONES = require('../constants/Tones.js'),
    AppDispatcher = require('../dispatcher/Dispatcher.js');


var KeyActions = {

  keyPressed: function(note){
    AppDispatcher.dispatch({
      actionType: TONES[note],
      noteName: note
    });
  },

  keyReleased: function(note){
    AppDispatcher.dispatch({
      noteName: note
    });
  }
};

module.exports = KeyActions;
