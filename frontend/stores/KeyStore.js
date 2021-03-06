var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/appDispatcher.js'),
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

var resetKeys = function(key){
  var idx = _keys.indexOf(key);
  _keys.splice(idx, 1);
  KeyStore.__emitChange();
};

var addKey = function(key){
  _keys.push(key);
  KeyStore.__emitChange();
};

module.exports = KeyStore;
