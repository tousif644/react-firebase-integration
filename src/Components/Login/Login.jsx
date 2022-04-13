import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>This is login</h1>
      <button onClick={() => signInWithGoogle()}>Google Sign in</button>

      {/* // Forms For login */}
      <form action="">
        <input
          type="email"
          name=""
          id=""
          placeholder="Please enter your email"
        />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Please enter your password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
