import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css';


const TicketButton = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!showMenu) return;
  //   const closeMenu = () => {
  //     setShowMenu(false);
  //   };
  //   document.addEventListener('click', closeMenu);
  //   return () => document.removeEventListener('click', closeMenu);
  // }, [showMenu]);

  return (
    <>
      <div className='tickets' >
        <NavLink className='ticketButton icon'>
          <i className="fas fa-ticket-alt ticketButton" ></i>
        </NavLink>
      </div>
    </>
  )
};

export default TicketButton;