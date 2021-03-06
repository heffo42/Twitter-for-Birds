'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAVUNFAV_REJ = exports.FAVUNFAV_FUL = exports.GETPROFILE_REJ = exports.GETPROFILE_FUL = exports.UPDATEPROFILE_REJ = exports.UPDATEPROFILE_FUL = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.updateProfile = updateProfile;
exports.getUser = getUser;
exports.favUnfav = favUnfav;

var _authenticatedRequest = require('../utils/authenticatedRequest');

var _authenticatedRequest2 = _interopRequireDefault(_authenticatedRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATEPROFILE_FUL = exports.UPDATEPROFILE_FUL = 'UPDATEPROFILE_FUL';
var UPDATEPROFILE_REJ = exports.UPDATEPROFILE_REJ = 'UPDATEPROFILE_REJ';

var GETPROFILE_FUL = exports.GETPROFILE_FUL = 'GETPROFILE_FUL';
var GETPROFILE_REJ = exports.GETPROFILE_REJ = 'GETPROFILE_REJ';

var FAVUNFAV_FUL = exports.FAVUNFAV_FUL = 'FAVUNFAV_FUL';
var FAVUNFAV_REJ = exports.FAVUNFAV_REJ = 'FAVUNFAV_REJ';

function updateProfile(data) {
  // TODO: will send a POST  request  to /api/profile/edit with the data passed into it
  // this request will need to be an authenticated request (ref the import at the
  // top of the file
  // Note that this action creator is asynchronous. Look back at lecture to see
  // how you should  structure this function in light of that fact
  // From the response, grab the name, species, and image
  // dispatch an UPDATEPROFILE_FUL action with additional properties `profile`
  // and `message: 'You have updated your profile and can now check it'` In the
  // `profile` preoperty of the action, set its value equal to an object with
  // properties name, species, and image
  // If the request fails/errors, send an action of type UPDATEPROFILE_REJ and
  // add an additional property `error` containing the error itself
  return function (dispatch) {
    (0, _authenticatedRequest2.default)('POST', '/api/profile/edit', data).then(function (res) {
      return res.json();
    }).then(function (resp) {
      var data = resp.data;
      console.log('profile actions');
      console.log(resp);
      dispatch({
        type: UPDATEPROFILE_FUL,
        message: 'You have updated your profile and can now check it',
        profile: data
      });
    }).catch(function (error) {
      dispatch({
        type: UPDATEPROFILE_REJ,
        error: error
      });
    });
  };
}

function getUser(id) {
  console.log('profile action: getting user');
  // TODO: async action creator again
  // make an authenticated request to the route  that allows us to get profile
  // information. (you can ref your express files for this to see what type  of
  // request it is and the url pattern (note that you need to handle the case where
  // id is empty/undefined and adjust the url accordingly
  // When the request is successful, dispatch a GETPROFILE_FUL action with additional
  // property `profile` containing  the result of the request relevant (ref your express
  // method for what is returned)
  // if there's  an error, dispatch a GETPROFILE_REJ action with an addition property `error`
  // equal to the error
  var route = '/api/profile/info';
  if (id) {
    route = '/api/profile/' + id + '/info';
  }

  return function (dispatch) {
    (0, _authenticatedRequest2.default)('GET', route).then(function (res) {
      return res.json();
    }).then(function (resp) {
      dispatch({
        type: GETPROFILE_FUL,
        profile: resp.data
      });
    }).catch(function (error) {
      dispatch({
        type: GETPROFILE_REJ,
        error: error
      });
    });
  };
}

function favUnfav(id) {
  // TODO: async action creatora gain
  // make an authenticated request to t he route that allows us to follow
  // a user. when this returns, dispatch  a new FAVUNFAV_FUL action with properties
  // profile equal to the respnose data and also  a message property that says
  // 'You are now ' + following or unfollowing + ' this person'
  // else if there is an  error
  // dispatch an action FAVUNFAV_REJ  with an error equal  to the error of the
  // request
  console.log('id is: ');
  return function (dispatch) {
    (0, _authenticatedRequest2.default)('POST', '/api/profile/' + id + '/follow').then(function (res) {
      return res.json();
    }).then(function (resp) {
      var statement = 'fill';
      console.log(resp);
      console.log(String(resp.data.isFollowing) + " with a type of: " + _typeof(String(resp.data.isFollowing)));
      if (String(resp.data.isFollowing) === 'true') {
        console.log('why can does this not happen');
        statement = 'You are now following this person';
      } else {
        statement = 'You are now unfollowing this person';
      }
      dispatch({
        type: FAVUNFAV_FUL,
        profile: resp.data,
        message: statement
      });
    }).catch(function (error) {
      dispatch({
        type: FAVUNFAV_REJ,
        error: error
      });
    });
  };
}