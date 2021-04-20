import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import picture from '../images/eventbrite-logo.png';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id='icon-container'>
          <div className='icon-square-container'>
            <NavLink to='/create'>
              <img className='icon-image icon' src="https://img.icons8.com/ios/50/000000/plus-math.png" alt='create' />
              <h3 className='navbar-links'>Create</h3>
            </NavLink>
          </div>
          <div className='icon-square-container'>
            <NavLink to='/events'>
              <img className='icon-image icon' src="https://img.icons8.com/ios/50/000000/search--v1.png" alt='browse' />
              <h3 className='navbar-links'>Browse</h3>
            </NavLink>
          </div>
          <div className='icon-square-container' >
            <NavLink to='/tickets' >
              <img className='ticket-button icon'
                src="https://img.icons8.com/ios/50/000000/two-tickets.png" alt='tickets' />
              <h3 className='navbar-links'>Tickets</h3>
            </NavLink>
          </div>
          <div className='icon-square-container' >
            <NavLink to='/likes' >
              <img className='like-button icon'
                src="https://img.icons8.com/ios/50/000000/like--v2.png" alt='heart' />
              <h3 className='navbar-links'>Likes</h3>
            </NavLink>
          </div>
          <div className='icon-square-container'>
            <ProfileButton user={sessionUser} />

          </div>

        </div>
      </>
    );
  } else {
    sessionLinks = (
      <div className="loggedout">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
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