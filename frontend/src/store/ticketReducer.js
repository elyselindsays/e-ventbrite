import { fetch } from './csrf';

const SET_MY_TICKETS = '/events/SET_MY_TICKETS';

const setMyTickets = (payload) => ({
  type: SET_MY_TICKETS,
  payload
});


export const getMyTickets = () => async (dispatch) => {
  const res = await fetch(`/api/events/my-tickets`);
  dispatch(setMyTickets(res.data));
}




const ticketReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SET_MY_TICKETS:
      console.log(action.payload)
      return [...action.payload]
    default:
      return state;
  }
};


export default ticketReducer;