import React, { useState } from "react";

const ShowHide = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const user = "soham";
  return (
    <>
      {!isSignIn && (
        <button className="btn" onClick={() => setIsLogIn(!isLogIn)}>
          Login
        </button>
      )}
      {!isLogIn && (
        <button className="btn" onClick={() => setIsSignIn(!isSignIn)}>
          Signin
        </button>
      )}
      <div style={{ marginTop: "2rem" }}>
        {isLogIn && <Login user={user} />}
        {isSignIn && <SignIn />}
      </div>
    </>
  );
};

const Login = ({ user }) => {
  return <h1>Helllo {user}</h1>;
};

const SignIn = () => {
  return <h1>Please enter the fields</h1>;
};

export default ShowHide;
