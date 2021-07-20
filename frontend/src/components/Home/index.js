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
              <Link to='/events'>
                <button className="home-button">
                  <div className="tixButtonText">Get tickets</div>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ "mix-blend-mode": "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M136.16667,53.75l35.83333,32.25l-35.83333,32.25z"></path><path d="M0,75.25h150.5v21.5h-150.5z"></path></g></g></svg>

                </button>
              </Link>
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