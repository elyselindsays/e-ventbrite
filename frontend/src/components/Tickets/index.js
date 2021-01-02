import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getMyTickets } from "../../store/ticketReducer";
import '../Events/Events.css';



const MyTickets = () => {


  const myTickets = useSelector((state) => state.tickets);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getMyTickets());
  }, [dispatch])


  return (
    <div id='my-tickets'>
      <h2>My Tickets</h2>

      <div className='card-container' >
        {myTickets.map((ticket) => (
          <div className='card' id={ticket.id}>
            <div className='card-image'>
              {/* <Link to={`/events/${event.id}`}> */}
              <img className='card-image' src={ticket.id} alt='event' />
              {/* </Link> */}
            </div>
            <div className='info-container'>
              {/* <Link to={`/events/${event.id}`}> */}
              <div id='event-title'>{ticket.id}</div>
              <div id='event-date'>{ticket.id}</div>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>


    </div>

  )


}


export default MyTickets;