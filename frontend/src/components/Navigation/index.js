import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LikeButton from './LikeButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import TicketButton from './TicketButton';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <LikeButton />
        <TicketButton />
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


      <NavLink exact to="/">e-ventbrite</NavLink>
      {isLoaded && sessionLinks}


    </div>
  );
}

export default Navigation;