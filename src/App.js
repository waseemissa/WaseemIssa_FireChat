import './App.css';
import * as React from 'react';
import Login from './Components/Login';
import Chat from './Components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';


function App() {

  const [user] = useAuthState(auth);

  return (
      <>
      {user? <Chat /> : <Login />}
      </>
  );
}

export default App;
