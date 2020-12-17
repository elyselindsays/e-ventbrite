import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as sessionActions from './store/session';

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => setIsLoaded(true))
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
