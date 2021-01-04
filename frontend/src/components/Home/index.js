import { useSelector } from 'react-redux';
import './Home.css';
import picture from './shaking-hands.png';

import { Link } from 'react-router-dom';

const Home = () => {

  const loggedInUser = useSelector(state => {

    return state.session.user;
  });


  return (
    <div>
      {loggedInUser && <h1>hello {loggedInUser.username}</h1>}
      <div id='home-page-container'>
        <div className='home-card'>
          <div className='home-card-text-container'>
            <h2>Connect through online events</h2>
            <div className='browse-button'>
              <Link to='/events'>
                <img src="https://img.icons8.com/ios/50/000000/right--v1.png" alt='arrow' />
              </Link>
            </div>
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