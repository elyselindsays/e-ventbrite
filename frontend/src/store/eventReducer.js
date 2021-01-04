import Create from '../components/Create';
import { fetch } from './csrf';

const SET_EVENTS = '/events/SET_EVENTS';
const REGISTER = '/events/REGISTER';
const CREATE = '/events/CREATE';
const UNLIKE = '/events/UNLIKE'


const setEvents = (payload) => ({
  type: SET_EVENTS,
  payload
});

const registerTicket = (payload) => ({
  type: REGISTER,
  payload
});

const create = (payload) => ({
  type: CREATE,
  payload
})

const removeLike = () => ({
  type: UNLIKE
})

/************ THUNK ACTION CREATORS ************ */

export const getEvents = () => async (dispatch) => {
  const res = await fetch(`/api/events`);
  dispatch(setEvents(res.data));
};

export const unlike = () => async (dispatch) => {
  const res = await fetch(`/api/events/unlike`, {
    method: 'DELETE'
  });
  dispatch(removeLike())
  return res;
}

export const createEvent = (event) => async (dispatch) => {
  const { title, date, description } = event;
  const res = await fetch(`/api/events/create`, {
    method: 'post',
    body: JSON.stringify({
      title, date, description

    })
  })
  dispatch(create(res.data.event))
  return res;
}


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

  let newState;
  switch (action.type) {
    case SET_EVENTS:

      return [...action.payload];

    case REGISTER:
      newState = [...state];
      newState.push(action.payload)
      return newState;
    case CREATE:
      let newerState = [...state];
      newerState.push(action.payload);
      return newerState;
    case UNLIKE:



    default:
      return state;
  }
};


export default eventReducer;