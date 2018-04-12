'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO: createa reducer function messageReducer that has  an initialState
// { messages: [] }
// If any action has a property 'error' on it, then append to the messages
// array a new object
//    { messageType: 'error' if the  action has an error  property else 'info',
//      message: action.error if an error else action.message
//    }
// Also handle the case where the action type is DISMISS
// if that happens, then remove from the messages array the index supplied
// with the dismiss  action
// remember all these changes must be immutable (I use mutable language
// terms for simplicity


var initState = {
  messages: []
};

var messageReducer = function messageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  if (action.type === 'DISMISS') {
    //removes
    console.log('removing message at index: ' + action.index);
    var temp = state.messages.slice();
    temp.splice(action.index, 1);
    return {
      messages: temp
    };
  } else {
    if (action.error) {
      //fix
      var temp = state.messages.slice();
      temp.push({
        messageType: 'error',
        message: action.error
      });
      return { messages: temp };
    } else if (action.message) {

      var temp = state.messages.slice();
      temp.push({
        messageType: 'info',
        message: action.message
      });
      return { messages: temp };
    } else {
      return state;
    }
  }
};

exports.default = messageReducer;