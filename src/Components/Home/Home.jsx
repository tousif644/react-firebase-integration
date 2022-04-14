import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>this is home</h1>
      <h6>Current User is : {user ? user.displayName : "not found"}</h6>
    </div>
  );
};

export default Home;
