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
  };


  // Make sure to handle and display errors from the signup thunk action if there are any.If the confirm password is not the same as the password, display an error message for this.

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
      <label>Username
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>Email
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>Password
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>Confirm Password
        <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  )


}


export default SignupFormPage;