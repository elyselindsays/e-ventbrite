import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';
import picture from '../images/eventbrite.png';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );

  };

  const submitDemo = (e) => {
    return dispatch(sessionActions.login({ credential: 'demo', password: 'password' })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );

  }

  return (
    <>
      <div className='login-modal'>
        <div className='headers'>
          <h1>Welcome</h1>
          <h3 className="subhead">Login to your account.</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className='inputFields'>
            <div className='user-input'>
              <input
                type="text"
                placeholder='Username or Email'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                className='user-input input'
              />
            </div>
            <div className='password-input input'>
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className='loginButton'>LOG IN</button>
          <button onClick={submitDemo} className='loginButton'>DEMO LOG IN</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;

/*
<div class="overlay">
  <!-- LOGN IN FORM by Omar Dsoky -->
<form>
    <!--   con = Container  for items in the form-->
   <div class="con">
      <!--     Start  header Content  -->
   <header class="head-form">
        <h2>Log In</h2>
        <!--     A welcome message or an explanation of the login form -->
      <p>login here using your username and password</p>
      </header>
      <!--     End  header Content  -->
   <br>
        <div class="field-set">

          <!--   user name -->
         <span class="input-item">
            <i class="fa fa-user-circle"></i>
          </span>
          <!--   user name Input-->
         <input class="form-input" id="txt-input" type="text" placeholder="@UserName" required>

            <br>

              <!--   Password -->

      <span class="input-item">
                <i class="fa fa-key"></i>
              </span>
              <!--   Password Input-->
      <input class="form-input" type="password" placeholder="Password" id="pwd" name="password" required>

                <!--      Show/hide password  -->
     <span>
                  <i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                </span>


                <br>
                  <!--        buttons -->
<!--      button LogIn -->
      <button class="log-in"> Log In </button>
   </div>

                <!--   other buttons -->
   <div class="other">
                  <!--      Forgot Password button-->
      <button class="btn submits frgt-pass">Forgot Password</button>
                  <!--     Sign Up button -->
      <button class="btn submits sign-up">Sign Up
<!--         Sign Up font icon -->
      <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </button>
                  <!--      End Other the Division -->
   </div>

                <!--   End Conrainer  -->
  </div>

              <!-- End Form -->
</form>
</div>

*/