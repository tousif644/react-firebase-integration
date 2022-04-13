import { useState, useEffect } from "react";
import app from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Pre defining for the google sign in
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  // Google Sign in

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  // Google Sign out
  const handlesignOut = () => {
    signOut(auth).then(() => {});
  };

  // Effect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // return [user, setUser];
  return { user, signInWithGoogle, handlesignOut };
};

export default useFirebase;
