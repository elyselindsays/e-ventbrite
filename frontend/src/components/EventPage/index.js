
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventPage = () => {

  // useParams to get id from state
  // setup route to eventpage
  // find the one with the right id
  // render that

  const eventState = useSelector((state) => state.event);
  const { id } = useParams();
  const foundEvent = eventState.find(ev => ev.id === Number(id))


  console.log(eventState);
  console.log(id);

  // TO-DO: function that "finds" the object in the eventState array where the id equals the id param


  return (
    <>
      <h1>Event Page</h1>
      <div className='eventHero'>

        <div key={foundEvent.id} className='event-page'>
          <div className='photoBlock'>
            <img src={foundEvent.image} className='photo' alt='event'></img>
          </div>
          <div>
            <h1 className='eventTitle'>{foundEvent.title}</h1>
          </div>
          <div className='dateBlock'>
            <div id='date'>{foundEvent.date}</div>
            <div id='time'>{foundEvent.date}</div>
          </div>
        </div>

        {/* Register Button */}
        <div className='registerButton'>
          <Link to={`/events/${foundEvent.id}/register`}>
            <button>Register</button>
          </Link>
        </div>

        {/* Description Block */}
        <div className="descriptionBox">
          <h3>About this Event</h3>
          <p>{foundEvent.description}</p>
        </div>



        {/* Tags */}
        <div className='tagsContainer'>
          {/* tag links */}
        </div>
      </div>



    </>

  );
}



export default EventPage;