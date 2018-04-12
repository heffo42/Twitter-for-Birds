'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tweetActions = require('../actions/tweetActions');

// TODO: createa  reducer called tweetReducer that has an initalState {}
// if the LOADTWEETS_FUL action occurs, make sure that your eventual
// state would look like
// {
//  whateverTheTweetId: { fullTweetObj },
//  whateverTheTweetId2: { fullTweetobj2 }
//  ...
// }
// basically i should be able to do state[someTweetId] and get the
// full tweet object containing that tweet
// on the CREATETWEET_FULa nd FAVORITE_FUL actions, just  set the
// tweet in the state equal to the data you get from the action

var initState = {};

var tweetReducer = function tweetReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    if (action.type === _tweetActions.LOADTWEETS_FUL) {
        var temp = {};
        action.tweets.map(function (x) {
            temp[x.tweetId] = x;
        });
        console.log('about to return temp');
        console.log(temp);
        return temp;
    } else if (action.type === _tweetActions.CREATETWEET_FUL) {
        var temp = Object.assign({}, state);
        temp[action.data.tweetId] = action.data;
        return temp;
    } else if (action.type === _tweetActions.FAVORITE_FUL) {
        var temp = Object.assign({}, state);
        temp[action.data.tweetId] = action.data;
        return temp;
    }
    return state;
};
// When the LOADTWEETS_FUL action occurs, set ids equal to justt he tweetId
// for all the tweets from the action

exports.default = tweetReducer;