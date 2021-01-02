import { fetch } from './csrf';

const SET_EVENTS = '/events/SET_EVENTS';
const REGISTER = '/events/REGISTER';


const setEvents = (payload) => ({
  type: SET_EVENTS,
  payload
});

const registerTicket = (payload) => ({
  type: REGISTER,
  payload
});



/************ THUNK ACTION CREATORS ************ */

export const getEvents = () => async (dispatch) => {
  const res = await fetch(`/api/events`);
  dispatch(setEvents(res.data));
};


export const register = (ticket) => async (dispatch) => {
  const { eventId, userId } = ticket;
  const res = await fetch(`/api/events/register`, {
    method: 'post',
    body: JSON.stringify({
      eventId, userId
    })
  });
  dispatch(registerTicket(res.data.ticket))
  return res;
};





const eventReducer = (state = [], action) => {

  switch (action.type) {
    case SET_EVENTS:
      console.log(action.payload)
      return [...action.payload];

    case REGISTER:
      console.log(action.payload);

      return state;
    default:
      return state;
  }
};


export default eventReducer;