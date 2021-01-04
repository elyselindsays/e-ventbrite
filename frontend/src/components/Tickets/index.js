import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getMyTickets } from "../../store/ticketReducer";
import '../Events/Events.css';



const MyTickets = () => {


  const myTickets = useSelector((state) => state.tickets);
  const dispatch = useDispatch();





  useEffect(() => {
    dispatch(getMyTickets());
  }, [dispatch]);


  const tickets = myTickets.filter(ticket => {
    return (!ticket.bookmark)
  })

  return (
    <div id='my-tickets'>
      <h2>My Tickets</h2>
      <div className='card-container' >
        {tickets.map((ticket) => (
          <div className='card' id={ticket.Event.id} key={ticket.Event.id}>
            <div className='card-image'>
              <Link to={`/events/${ticket.Event.id}`}>
                <img className='card-image' src={ticket.Event.image} alt='event' />
              </Link>
            </div>
            <div className='info-container'>
              <Link to={`/events/${ticket.Event.id}`}>
                <div id='event-title'>{ticket.Event.title}</div>
                <div id='event-date'>{ticket.Event.date}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default MyTickets;