import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { createEvent } from '../store/eventReducer';
import './SignupFormPage/SignupForm.css';


const Create = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);



  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();


    return dispatch(createEvent({ title, date, description }))

  }





  return (


    <form onSubmit={handleSubmit}>
      <label>Title
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>Date
        <input type='text' value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>Description
        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <button type="submit">Create Event!</button>
    </form>



  )



}


export default Create;