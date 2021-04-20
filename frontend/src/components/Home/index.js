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
      {loggedInUser && <h1>hello {loggedInUser.username}!</h1>}
      <div id='home-page-container'>

        <div className='home-card'>
          <div id="shadow"></div>
          <div className='home-card-text-container'>
            <h2 id="home-head">Discover the best</h2>
            <h1 id="home-subhead">online events</h1>
            <div className='browse-button'>
              <button className="home-button">Get tickets
                <Link to='/events'>
                  <img id='arrow' src="https://img.icons8.com/ios/50/000000/right--v1.png" alt='arrow' />
                </Link>

              </button>
            </div>
          </div>
          <div className='home-photo-container'>
            <img src="https://eventbrite-s3.s3.amazonaws.com/marketing/homepage/onilne-events-banner-2X.jpg" alt='handshake' className='home-photo'></img>
          </div>

        </div>
      </div>
    </div>
  )
}




export default Home;