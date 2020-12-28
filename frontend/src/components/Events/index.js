//FUNCTIONAL COMPONENT FOR EVENT PAGE

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";

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


export const EventBrowse = () => {


  const events = useSelector((state) => state.events);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getEvents())

  }, []);


  console.log(events);

  // 4 cards in a row standard
  /************
   * photo
   * date/time
   * title
   * bookmark/save
   */

  return (
    <>
      <h1>Browse Events</h1>
      <p>{events}</p>

      {events.map((event) => (
        <div>
          <div>{event.image}</div>
          <div>{event.title}</div>
          <div>{event.date}</div>
        </div>
      ))}



    </>
  );
}





