import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


const Navigation = ({ isLoaded }) => {

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </>
    );
  }



  return (
    // Your navigation should render an unordered list with a navigation link to the home page.It should only contain navigation links to the login and signup routes when there is no session user and a logout button when there is.

    <ul>
      <li>
        <NavLink exact to="/" >Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>

  )


};




export default Navigation;