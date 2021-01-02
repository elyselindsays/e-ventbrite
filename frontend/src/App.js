import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EventBrowse from './components/Events';
import EventPage from "./components/EventPage";
import Registration from './components/Registration';
import Home from "./components/Home";
import MyTickets from './components/Tickets';
import Confirmation from './components/Registration/confirmation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tickets">
            <MyTickets />
          </Route>
          <Route exact path={`/events/:id/register`}>
            <Registration />
          </Route>
          <Route exact path={`/events/:id`}>
            <EventPage />
          </Route>
          <Route exact path='/events'>
            <EventBrowse />
          </Route>
          <Route exact path='/events/confirmation'>
            <Confirmation />
          </Route>
        </>
      )}
    </>
  );
}

export default App;