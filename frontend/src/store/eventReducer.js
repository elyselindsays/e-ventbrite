import { fetch } from './csrf';

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

  console.log(`${res}******************************`)
  console.log(Array.isArray(res.data));
  dispatch(setEvents(res.data));

};

// export const getOneEvent = (id) => async (dispatch) => {
//   const res = await fetch(`/api/events/${id}`);
//   dispatch(setEvents(res.data));
// }



const eventReducer = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS:
      console.log(action.payload)
      return [...action.payload]

    default:
      return state;
  }
};


export default eventReducer;