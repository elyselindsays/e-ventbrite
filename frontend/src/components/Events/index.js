//FUNCTIONAL COMPONENT FOR EVENT PAGE

import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getOneEvent } from "../../store/eventReducer";
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


const EventBrowse = () => {
  const events = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    // dispatch(getOneEvent(e.target.id))
  }

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch])

  return (
    <>
      <h1 >Browse Events</h1>
      <div className='card-container' >
        {events.map((event) => (
          <div className='card' id={event.id}>
            <div className='card-image'>
              <Link to={`/events/${event.id}`}>
                <img className='card-image' src={event.image} alt='event' />
              </Link>
            </div>
            <div className='info-container'>
              <Link to={`/events/${event.id}`}>
                <div id='event-title'>{event.title}</div>
                <div id='event-date'>{event.date}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}






export default EventBrowse;
