// Importing important files and components into this

import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "./../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

// Login main function

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  const from = location?.state?.from?.pathname || "/";

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h1>This is login</h1>
      <button onClick={() => handleSignInWithGoogle()}>Google Sign in</button>

      {/* // Forms For login */}
      <form action="">
        <input type="email" name="" id="" placeholder="Please enter your email" />
        <br />
        <input type="password" name="" id="" placeholder="Please enter your password" />
        <br />
        <input type="submit" value="Login" /> </form>
    </div>
  );
};

export default Login;
