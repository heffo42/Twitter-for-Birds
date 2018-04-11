import {
  LOGIN_FUL,
  LOGIN_REJ,
  LOGOUT_FUL,
  REGISTER_FUL,
  REGISTER_REJ,
} from '../actions/auth';

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

const initState = {
  isAuthenticated: localStorage.getItem('token')  ? true : false
}

var auth = function(state = initState, action){
  console.log('authReducer function run')
  if(action.type == LOGIN_FUL || action.type == REGISTER_FUL){
    console.log("is auth is now true")
    return{
      ...state,
      isAuthenticated: true
    }
  }else if(action.type == REGISTER_REJ || action.type == LOGOUT_FUL || action.type == LOGIN_REJ){
    return{
      ...state,
      isAuthenticated: false
    }
  }else{
    return state;
  }
}

export default auth;
