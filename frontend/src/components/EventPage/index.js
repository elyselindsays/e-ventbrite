
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { like } from '../../store/eventReducer';
import './EventPage.css';

const EventPage = () => {


  const eventState = useSelector((state) => state.event);
  const user = useSelector((state) => state.session.user);
  const tickets = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const { id } = useParams();
  const foundEvent = eventState.find(ev => ev.id === Number(id));


  const registered = tickets.filter(ticket => {
    return (ticket.eventId === foundEvent.id && ticket.bookmark !== true);
  })



  const registeredFragment = (
    <>
      <p>Registered!</p>
    </>
  )

  const liked = tickets.filter(ticket => {
    if (ticket.bookmark === true) {
      return ticket.eventId === foundEvent.id;
    } else return null;
  })


  const likedFragment = (
    <>
      <button className='liked'>Unlike</button>
    </>
  )


  const clickLike = async (e) => {
    const payload = {
      eventId: foundEvent.id,
      userId: user.id,
      bookmark: true
    }
    await dispatch(like(payload))
    e.target.style.backgroundColor = 'purple';
  }

  // const unlike = async (e) => {
  //   await dispatch(unlike());
  //   e.target.innerHTML = 'Like'
  // }


  return (
    <>

      <div key={foundEvent.id} className='event-page'>
        <div className='event-header'>
          <div className='event-photo-container'>
            <img src={foundEvent.image} className='event-page-photo' alt='event'></img>
          </div>
          <div className='event-text'>

            <div id='event-title'>
              <h1 className='event-title'>{foundEvent.title}</h1>
            </div>
            <div className='dateBlock'>
              <div id='date'>{foundEvent.date}</div>
            </div>
            <div className='registerButton'>
              {registered.length > 0 && registeredFragment}
              {registered.length === 0 && <Link to={`/events/${foundEvent.id}/register`}>
                <button className='event-button'>Register</button>
              </Link>}
              {liked.length > 0 && likedFragment}
              {liked.length === 0 && <button onClick={clickLike} className='event-button'>Like</button>}

            </div>

          </div>
        </div>
      </div>

      {/* Register Button */}


      {/* Description Block */}
      <div className="descriptionBox">
        <h3 className="about">About this Event</h3>
        <p>{foundEvent.description}</p>
      </div>



      {/* Tags */}
      <div className='tagsContainer'>
        {/* tag links */}
      </div>




    </>

  );
}



export default EventPage;