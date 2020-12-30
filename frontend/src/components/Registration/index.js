

const Registration = () => {

  /*
   * 
   * h1 Checkout
   * Ticket
   * General Admission                Free
   *
   * Contact Information
   * first name
   * last name
   * email address
   * *****PERSIST STATE******
   * 
   * REGISTER BUTTON
   * 
   * register button ONCLICK/ONSUBMIT
   * E.PREVENTDEFAULT
   * 
   * RETURN OR RENDER A thanks for your order!!
   * 
   * 
   * 
  */


  return (
    <>
      <div>

        {/* TO-DO: PLUG IN EVENT NAME */}


        <form
        // onSubmit={handleSubmit}
        >
          <h1>Checkout</h1>
          <h2>event name</h2>
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