/***************
Write your initial state []

Dispatch an action creator(TBD) passing the info from the backend
Define the action creator with action definition(TBD)
Define the action definition
Write the case for the userReducer
*********************/

const SET_EVENTS = '/events/SET_EVENTS';


const setEvents = (payload) => ({
  type: SET_EVENTS,
  payload
});


/********** Define a thunk to hit a backend route(TBD) *******/

export const getEvents = () => async (dispatch) => {
  const res = await fetch(`/api/events`);
  const events = await res.json();
  dispatch(setEvents(events))
};



const eventReducer = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload
    default:
      return state;
  }
};


export default eventReducer;