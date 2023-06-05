import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>TIC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <SignUp />
      {/* <LogIn /> */}
    </div>
  );
}

function LogIn() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm" style={{ width: "20rem" }}>
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="userName"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account! Sign up
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="userName"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
