//FUNCTIONAL COMPONENT FOR EVENT PAGE

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import './Events.css'

// Write your initial state
// Import useSelector from 'react-redux'
// Initialize useSelector
// Render information from the store
// In the handleClick, dispatch a thunk(TBD)
// Import and initialize useDispatch from 'react-redux'
// Define a thunk to hit a backend route(TBD)
// Define a backend route to query the backend
// Dispatch an action creator(TBD) passing the info from the backend
// Define the action creator with action definition(TBD)
// Define the action definition
// Write the case for the userReducer


/************ what needs to happen to get all ********/
/****
 * 
 * what is initial state of HOME BROWSE PAGE
 * // INITIAL STATE IS ALL CURRENT EVENTS
 * // TO-DO: SETUP INITIAL STATE CONST
 * 
 * // TODO: RENDER CARDS FOR ALL EVENTS IN DB
 * 
 * components of the card itself
 * // TO-DO: FIGURE OUT AND RENDER INFO WANTED ON CARDS
 * // THAT CARD MIGHT BE A COMPONENT???
 * // TO-DO: MAKE EVENT CARD COMPONENT
 * 
 * 
 * thunk action creator
 * // TO-DO: define a function getEvents; fetch from the backend event data of different queries of events
 * // TO-DO: at end of thunk action creator, call dispatch to ACTION CREATOR** -->
 * 
 * 
 * action creator
 * // 
 * 
 * 
 * reducer involvement
 * backend involvement
 * rendering
 * seeding??
 * 
 * 
 * 
 */







const EventBrowse = () => {
  const events = useSelector((state) => state.event);

  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   console.log('click');
  //   dispatch(getEvents());
  //   console.log(events);
  // }

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch])

  return (
    <>
      <h1 >Browse Events</h1>
      {console.log(events)}
      <div className='card-container'>
        {/* {events.map((event) => ( */}
        <div className='card'>
          <div className='card-image'>
            {/* <img className='card-image' src={event.image} alt='event' /> */}
            <img className='card-image' src='https://www.verywellfit.com/thmb/UWC6eL4g74LwJQF33TyTn1C6h7w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yoga-class-stretching-640630209-57f3b8263df78c690f28580c.jpg' alt='event' />
          </div>
          <div className='info-container'>
            {/* <div id='event-title'>{event.title}</div> */}
            <div id='event-title'>Yoga</div>
            {/* <div id='event-date'>{event.date}</div> */}
            <div id='event-date'>may 4</div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
}






export default EventBrowse;
