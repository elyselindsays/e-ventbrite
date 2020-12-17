import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionUser } from '../../store/session';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
  // Render a form with a controlled input for the user login credential(username or email) and a controlled input for the user password.

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  // On submit of the form, dispatch the login thunk action with the form input values.Make sure to handle and display errors from the login thunk action if there are any.

  if (sessionUser) return (
    <Redirect to='/' />
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([])
    return dispatch(getSessionUser({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
        <label>Username or Email
          <input type='text' value={credential} onChange={(e) => setCredential(e.target.value)} required />
        </label>
        <label>Password
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  )
};



export default LoginFormPage;