import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';


const SignupFormPage = () => {

  // Render a form with controlled inputs for the new user's username, email, and password, and confirm password fields.
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);


  // On submit of the form, validate that the confirm password is the same as the password fields, then dispatch the signup thunk action with the form input values.

  if (sessionUser) return <Redirect to='/' />

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);

      return dispatch(signUp({ username, email, password }))
        .catch((res) => {
          if (res.data && res.data.errors) setErrors(res.data.errors)
        });
    }

    return setErrors(['Passwords must match.'])

    // TODO FIGURE OUT REDIRECT
  };


  // Make sure to handle and display errors from the signup thunk action if there are any.If the confirm password is not the same as the password, display an error message for this.

  return (
    <div>
      <h1>Welcome</h1>
      <h3 className="subhead">Create an account.</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
        {/* <label>Username */}
        <div className="login-form">

          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
          {/* </label> */}
          {/* <label>Email */}
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          {/* </label> */}
          {/* <label>Password */}
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          {/* </label> */}
          {/* <label>Confirm Password */}
          <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
          {/* </label> */}
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )


}


export default SignupFormPage;