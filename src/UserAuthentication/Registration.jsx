
import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

import { HiPaperAirplane } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Registration = () => {
  const [newuser, setNewuser] = useState({
    fullname: "",
    email_address: "",
    password: "",
    confirm_password: "",
  });
  const changeHandler = (e) => {
    setNewuser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { fullname, email_address, password, confirm_password } = newuser;
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${process.env.API}registration`, newuser).then((res) => {
      alert(res.data);
      setNewuser({
        fullname: "",
        email_address: "",
        password: "",
        confirm_password: "",
      });
    });
  };
  // console.log(newuser);
  return (
    <div className="registration-section">
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
      <div className="input-section flex justify-center items-center">
        <div className="form w-96">
          <div className="formheader text-xl font-semibold mt-3 mb-3 text-center">
            Registration
          </div>
          <form action="" onSubmit={submitHandler} className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your fullname"
              onChange={changeHandler}
              name="fullname"
              value={fullname}
              required
            />
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
            <input
              type="password"
              placeholder="Enter Password"
              onChange={changeHandler}
              name="confirm_password"
              value={confirm_password}
              required
            />
            <button className="btn">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
