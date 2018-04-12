'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _auth = require('../actions/auth');

// TODO: create a reducer function called `auth` with initialState
// { isAuthenticated: localStorage.getItem('token')  ? true : false }
//  and if the actions dispatched are
//  LOGIN_FUL or REGISTER_FUL, set isAuthenticated to true
//  If the action dispatch is
//  REGISTER_REJ, LOGOUT_FUL, LOGIN_REJ
//  set isAuthenticated to false
//  when i say "set" i mean in the state
//  if none of these actions are matched, just return the state

//

var initState = {
  isAuthenticated: localStorage.getItem('token') ? true : false
};

var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  console.log('authReducer function run');
  if (action.type == _auth.LOGIN_FUL || action.type == _auth.REGISTER_FUL) {
    console.log("is auth is now true");
    return _extends({}, state, {
      isAuthenticated: true
    });
  } else if (action.type == _auth.REGISTER_REJ || action.type == _auth.LOGOUT_FUL || action.type == _auth.LOGIN_REJ) {
    return _extends({}, state, {
      isAuthenticated: false
    });
  } else {
    return state;
  }
};

exports.default = auth;