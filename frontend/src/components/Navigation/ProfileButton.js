import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';






const ProfileButton = ({ user }) => {

  // First, create a state variable called showMenu to control displaying the dropdown.showMenu defaults to false indicating that the menu is hidden.
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // When the ProfileButton is clicked, toggle showMenu to true indicating that the menu should now be shown.
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true)
  };
  // Modify the return value of your functional component conditionally to either show or hide the menu based on the showMenu state variable.

  // The dropdown navigation menu should show the session user's username and email, and add a button that will dispatch the logout action when clicked.

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>

      <div className='profileContainer dropdown' >
        <div className='profileButton icon-square-container' onClick={openMenu}>
          <img className='icon' src="https://img.icons8.com/ios/50/000000/user-menu-male.png" alt='profile' />
          <h3 className='navbar-links'>{user.email}</h3>
        </div>
        {showMenu && (
          <ul className="dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </div>
    </>

  )


}


export default ProfileButton;