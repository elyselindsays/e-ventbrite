// This file will contain all the actions specific to the session user's information and the session user's Redux reducer.


import { fetch } from "./csrf";

const SET_SESSION_USER = '/session/SET_SESSION_USER';
const REMOVE_SESSION_USER = 'session/REMOVE_SESSION_USER';

// Create two POJO action creators.
// One that will set the session user in the session slice of state to the action creator's input parameter, 
const setSessionUser = (user) => ({
  type: SET_SESSION_USER,
  payload: user
})

// and another that will remove the session user. Their types should be extracted as a constant and used by the action creator and the session reducer.
const removeSessionUser = () => ({
  type: REMOVE_SESSION_USER,

});


// You need to call the API to login then set the session user from the response, so add a thunk action for the POST / api / session.
export const getSessionUser = (user) => async (dispatch) => {
  // Make sure to use the custom fetch function from frontend / src / store / csrf.js.
  // The POST / api / session route expects the request body to have a key of credential with an existing username or email and a key of password.
  const { credential, password } = user;
  const res = await fetch(`/api/session`, {
    method: 'POST',
    body: JSON.stringify({
      credential, password
    })
  });
  // After the response from the AJAX call comes back, dispatch the action for setting the session user to the response's data.
  dispatch(setSessionUser(res.data.user));
  return res;
};

// Add a thunk action in frontend / src / store / session.js that will call the GET / api / session and dispatch the action to set the session user with the data from the response.
export const restoreSession = (user) => async (dispatch) => {
  const res = await fetch('/api/session');
  dispatch(setSessionUser(res.data.user));
  return res;
}

// You will use the POST / api / users backend route to signup a user.
//add a signup thunk action that will hit the signup backend route with username, email, and password inputs.After the response from the AJAX call comes back, dispatch the action for setting the session user to the response's data.
export const signUp = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username, email, password
    })
  })
  dispatch(setSessionUser(res.data.user));
  return res;

}



const initialState = { user: null };


const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SESSION_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_SESSION_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state
  }
}

export default sessionReducer;