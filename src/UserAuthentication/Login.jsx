

import { useState } from "react";
import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { HiPaperAirplane } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    email_address: "",
    password: "",
  });
  const [auth, setAuth] = useState(false);
  const { email_address, password } = user;
  const changeHandler = (e) => {
    setUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const loginHandler = (e) => {
    e.preventDefault();
    axios.post(`${process.env.API}login`, user).then((res) => {
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    });
  };
  if (auth) {
    return <Navigate to="/dashboard" />;
  }
  // console.log(user);
  return (
    <div className="Login-section">
      <div className="navbar flex justify-between">
        <div className="left-nav-section flex items-center">
          <div className="logoname">maillaunch</div>
          <div className="iconlogo">
            <HiPaperAirplane className="icon" />
          </div>
        </div>
        <div className="right-nav-section flex items-center">
          <div className="login flex items-center">
            <Link to="/login">Login</Link>

            <BiLogIn className="" />
          </div>
          <div className="signup flex items-center">
            <Link to="/registration"> Signup for free</Link>
            <BsArrowRightSquareFill className="" />
          </div>
        </div>
      </div>
      <div className="form flex flex-col items-center">
        <div className="formheader text-xl font-semibold mt-3 mb-3 text-center">
          Login
        </div>
        <form action="" onSubmit={loginHandler} className="flex flex-col w-96">
          <input
            type="email"
            placeholder="Enter your Email Address"
            onChange={changeHandler}
            name="email_address"
            value={email_address}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={changeHandler}
            name="password"
            value={password}
            required
          />
          <button className="btn bg-orange-400">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
