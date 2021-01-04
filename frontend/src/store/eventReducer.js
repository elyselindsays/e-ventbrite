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



export const like = (like) => async (dispatch) => {
  const { eventId, userId, bookmark } = like;
  const res = await fetch(`/api/events/like`, {
    method: 'post',
    body: JSON.stringify({
      eventId, userId, bookmark
    })
  });
  dispatch(registerTicket(res.data.ticket))
  return res;
};





const eventReducer = (state = [], action) => {

  switch (action.type) {
    case SET_EVENTS:

      return [...action.payload];

    case REGISTER:
      let newState = [...state];
      newState.push(action.payload)
      return newState;

    default:
      return state;
  }
};


export default eventReducer;