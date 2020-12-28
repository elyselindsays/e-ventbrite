import { useDispatch } from 'react-redux';




const EventPage = () => {


  const dispatch = useDispatch();

  const handleClick = (e) => {
    /*********** TO DO 5 *************/
    // dispatch a thunk
    // dispatch(THUNKGOESHERE(e.target.id))
  };

  return (

    <>
      <h1>Event Page</h1>

      {/* event hero:  */}
      <div className='eventHero'>
        <div className='photoBlock'>
          <img className='photo' alt='event'></img>
        </div>
        <div>
          <h1 className='eventTitle'>{ }</h1>
        </div>
        <div className='dateBlock'>
          <div id='date'></div>
          <div id='time'></div>
        </div>
        <div>
          <p id='price'></p>
        </div>
      </div>

      {/* Register Button */}
      <div className='registerButton'>
        <button>Register</button>
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