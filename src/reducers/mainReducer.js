import { combineReducers } from 'redux';
import authReducer from './authReducer'
import messageReducer from './messageReducer'
import tweetReducer from './tweetReducer'
import tweetListReducer from './tweetListReducer'
import discoverReducer from './discoverReducer'

// TODO: determine appropriate imports

// TODO: you should somehow * combine reducers * hint hint
// so that the reducer looks like
// {
//  authReducer: { isAuthenticated: ...  }
//  tweetList:  { ids: [...] }
//  tweet: { id1: {...}, id2: {...} ... }
//  profileReducer: { profile: { name: '', species: '' ... }}
//  messageReducer: { messages: [ { messageType: ..., message: ...}, ...] }
//  discoverReducer: { discovers: [...] }
// }
// store this reducer in a variable 'tweetApp'

var tweetApp =  combineReducers({
  authReducer: authReducer,
  messageReducer: messageReducer,
  tweetList: tweetListReducer,
  tweet: tweetReducer,
  discoverReducer: discoverReducer
})

export default tweetApp;
