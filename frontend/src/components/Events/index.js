import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import './Events.css';



const EventBrowse = () => {
  const events = useSelector((state) => state.event);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  let datetime;
  let baseTime;
  let finalTime;



  events.map(event => {

    datetime = event.date;
    console.log(datetime.split('-'));
    let dateArr = datetime.split('-');
    let [year, month, dayTime] = dateArr;
    dayTime = dayTime.split('T');

    switch (month) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "Mar";
        break;
      case "04":
        month = "Apr";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "Jun";
        break;
      case "07":
        month = "Jul";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
        break;

      default:
    };

    let [dayDate, militaryTime] = dayTime;
    baseTime = militaryTime.slice(0, 5);
    let timeNum = baseTime.slice(0, 2);

    if (timeNum < 12) {
      finalTime = timeNum + (baseTime.slice(2, 5)) + "AM"
    } else if (timeNum > 12) {
      finalTime = (timeNum - 12) + (baseTime.slice(2, 5)) + "PM"
    }

    console.log(`${month} ${dayDate}, ${finalTime}`)

  });


  return (
    <>
      <div id='browse-page'>
        <h1 className="text-head">Popular in Online Events</h1>
        <div className='card-container' >
          {events && events.map((event) => (
            <div className='card' id={event.id} key={event.id}>
              <div className='card-image'>
                <Link to={`/events/${event.id}`}>
                  <img className='card-image' src={event.image} alt='event' />
                </Link>
              </div>
              <div className='info-container'>
                <Link to={`/events/${event.id}`}>
                  <div id='event-title'>{event.title}</div>
                  <p id='event-date'>{event.date}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}






export default EventBrowse;
