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
    case "KEY_UP":
      addKey(payload.noteName);
      KeyStore.__emitChange();
      break;
    case "KEY_DOWN":
      resetKeys(payload.noteName);
      KeyStore.__emitChange();
      break;
  }
};

// KeyStore.__emitChange = function(){
//   resetKeys(payload.keys);
// }
var addKeyListener = function(key){

};

var removeKeyListener = function(key){

};

var resetKeys = function(keys){
  _keys = keys;
};

var addKey = function(key){
  _keys.push(key);
};

// create(tone[key]), destroy(tone[key])
module.exports = KeyStore;
