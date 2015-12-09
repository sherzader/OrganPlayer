var TONES = require('../constants/Tones.js');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var _keys = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.all = function(){
  return _keys.slice();
}

KeyStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case "K":

  }
}

module.exports = KeyStore;
