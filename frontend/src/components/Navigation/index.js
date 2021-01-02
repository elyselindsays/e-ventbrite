import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import TicketButton from './TicketButton';
import EventBrowse from '../Events';
import picture from '../images/eventbrite-logo.png';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='icon browse'>
          <NavLink to='/events'>
            <img src="https://img.icons8.com/plasticine/100/000000/search.png" alt='browse' />
            <h3>Browse Events</h3>
          </NavLink>
        </div>
        <div className='tickets icon' >
          <NavLink to='/tickets' className='ticketButton icon'>
            <img src="https://img.icons8.com/dusk/100/000000/starred-ticket.png" alt='tickets' />
            <h3>Tickets</h3>
          </NavLink>
        </div>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbarContainer'>

      <div className='logo-container'>

        <NavLink exact to="/">
          <img src={picture} className='logo' alt='logo'></img>
        </NavLink>
      </div>
      {isLoaded && sessionLinks}

    </div>
  );
}

export default Navigation;