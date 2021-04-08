import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import './Events.css';



const EventBrowse = () => {
  const events = useSelector((state) => state.event);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch])


  return (
    <>
      {/* {sessionUser && */}
      <div id='browse-page'>

        <h1 className="text-head">Popular in Online Events</h1>
        <div className='card-container' >
          {events.map((event) => (
            <div className='card' id={event.id} key={event.id}>
              <div className='card-image'>
                <Link to={`/events/${event.id}`}>
                  <img className='card-image' src={event.image} alt='event' />
                </Link>
              </div>
              <div className='info-container'>
                <Link to={`/events/${event.id}`}>
                  <div id='event-title'>{event.title}</div>
                  <p id='event-date'>{event.date}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* } */}
    </>
  );
}






export default EventBrowse;
