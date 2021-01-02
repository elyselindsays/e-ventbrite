import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { register } from '../../store/eventReducer'

const Registration = () => {

  const eventState = useSelector((state) => state.event);
  const userState = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const foundEvent = eventState.find(ev => ev.id === Number(id))

  console.log(userState)
  console.log(foundEvent)
  console.log(userState.user.id);
  console.log(foundEvent.id)




  const handleSubmit = async (e) => {
    e.preventDefault();
    /******************* THIS MIGHT BE WRONG ***********/
    const payload = {
      eventId: foundEvent.id,
      userId: userState.user.id
    }
    const ticket = await dispatch(register(payload));
    // if (ticket) {
    //   history.push(`/events/confirmation`)
    // }
  };

  // const toRender = 



  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <h1>Checkout</h1>
          <h2>{foundEvent.title}</h2>
          <div className='ticket-info-container'>
            <h3>Ticket</h3>
            <h3>General Admission</h3>
            <h3>Free</h3>
          </div>
          <div className='register-form'>
            <div className='contact-info'>
              <div className='contact-form'>
                <input
                  type="text"
                  placeholder='First Name'
                  // value={credential}
                  // onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </div>
              <div className='ticket-form'>
                <input
                  type="text"
                  placeholder='Last Name'
                  // value={credential}
                  // onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </div>
              <div className='ticket-form'>
                <input
                  type="email"
                  placeholder='Email address'
                  // value={credential}
                  // onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type='submit' className='register-button'>Register</button>
          </div>
        </form>

      </div>
    </>
  );
}

export default Registration;