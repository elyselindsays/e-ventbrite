import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getMyTickets } from "../../store/ticketReducer";
import '../Events/Events.css';



const Likes = () => {

  const bookmarks = useSelector((state) => state.tickets);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMyTickets());
  }, [dispatch]);

  const likes = bookmarks.filter(like => {
    return like.bookmark === true;
  })

  return (
    <div id='likes'>
      <h2>Likes</h2>
      <div className='card-container' >
        {!likes && <h4>No Likes Yet!</h4>}
        {likes.map((like) => (
          <div className='card' id={like.id}>
            <div className='card-image'>
              <Link to={`/events/${like.Event.id}`}>
                <img className='card-image' src={like.Event.image} alt='event' />
              </Link>
            </div>
            <div className='info-container'>
              <Link to={`/events/${like.Event.id}`}>
                <div id='event-title'>{like.Event.title}</div>
                <div id='event-date'>{like.Event.date}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Likes;