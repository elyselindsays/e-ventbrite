
import { useSelector, useDispatch } from 'react-redux';


/*** what needs to happen for my single event page ******/
/****
 * 
 * 
 * make call to backend with thunk
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  */


const EventPage = () => {


  const event = useSelector((state) => state.event);


  const dispatch = useDispatch();




  return (

    <>
      <h1>Event Page</h1>


      <div className='eventHero'>
        <div className='photoBlock'>
          <img className='photo' alt='event'></img>
        </div>
        <div>
          <h1 className='eventTitle'>{ }</h1>
        </div>
        <div className='dateBlock'>
          <div id='date'>date</div>
          <div id='time'>time</div>
        </div>
        <div>
          <p id='price'></p>
        </div>
      </div>

      {/* Register Button */}
      <div className='registerButton'>
        <button>Register</button>
      </div>
      {/* Like Button */}
      <div className='likeButtonContainer'>
        <button className='likeButton'>Like</button>
      </div>


      {/* Description Block */}
      <div className="descriptionBox">
        <h3>About this Event</h3>
        <p>Info</p>
      </div>



      {/* Tags */}
      <div className='tagsContainer'>
        {/* tag links */}
      </div>




    </>

  );
}



export default EventPage;