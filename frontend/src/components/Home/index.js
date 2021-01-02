import { useSelector } from 'react-redux';
import './Home.css';
import picture from './shaking-hands.png';

import { Link } from 'react-router-dom';

const Home = () => {

  const loggedInUser = useSelector(state => {
    console.log(state);
    return state.session.user;
  });


  return (
    <div>
      {loggedInUser && <h1>hello {loggedInUser.username} <Link to='/events'>browse events!</Link></h1>}
      <div id='home-page-container'>
        <div className='home-card'>
          <div className='home-card-text-container'>
            <h2>Connect through online events</h2>
          </div>
          <div className='home-photo-container'>
            <img src={picture} alt='handshake' className='home-photo'></img>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Home;