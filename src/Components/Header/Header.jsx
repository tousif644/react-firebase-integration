import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../Hooks/useFirebase";
const Header = () => {
  const { user, handlesignOut } = useFirebase();
  return (
    <div className="header-container">
      <Link to="/">Home</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/review">Review</Link>
      <Link to="/register">Register</Link>
      <span>{user?.displayName && user.displayName}</span>
      {user?.uid ? (
        <button onClick={handlesignOut}>Sign out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
