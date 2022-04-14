import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "./../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Orders from "../Orders/Orders";

// auth
const auth = getAuth(app);


//Required Auth
const RequireAuth = ({ childern }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Orders></Orders>;
};

export default RequireAuth;
