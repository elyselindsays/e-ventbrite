import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';


const LikeButton = () => {

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

      <div className='icon-container likes navbar' >
        {/* <a className='likeButton icon'> */}
        <i className="far fa-heart likeButton" ></i>
        {/* </a> */}
        {/* </button> */}
      </div>
    </>
  )
};

export default LikeButton;