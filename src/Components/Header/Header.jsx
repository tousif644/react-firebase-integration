// Importing important files and components into this
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "./../../firebase.init";
import { signOut } from "firebase/auth";

// Header
const Header = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <div className="header-container">
      <Link to="/">Home</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/review">Review</Link>
      <Link to="/register">Register</Link>
      <span>{user?.displayName && user.displayName}</span>
      {user?.uid ? (
        <button onClick={() => signOut(auth)}>Sign out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
