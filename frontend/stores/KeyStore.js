var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    TONES = require('../constants/Tones.js');

var _keys = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.all = function(){
  return _keys.slice();
}

//catches event from AppDispatcher
KeyStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case "KEY_DOWN":
      addKey(payload.noteName);
      break;
    case "KEY_UP":
      resetKeys(payload.noteName);
      break;
  }
};

// KeyStore.__emitChange = function(){
//   // triggers all callbacks from addListener()
// }

var resetKeys = function(keys){
  _keys = keys;
  KeyStore.__emitChange();
};

var addKey = function(key){
  _keys.push(key);
  KeyStore.__emitChange();
};

module.exports = KeyStore;
