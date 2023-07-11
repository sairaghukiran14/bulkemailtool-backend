import React from "react";
import "./Homepage.css";
import { HiPaperAirplane } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="Homepage-section">
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
      <div className="content-section h-screen">
        <div className="bannerimage">{/* <img src={} alt="" /> */}</div>
        <div className="description">
          Are you tired of spending hours sending individual emails to your
          entire contact list? Say goodbye to manual email marketing and embrace
          the power of EasySend - the most efficient and user-friendly bulk
          email sender!
        </div>
      </div>
    </div>
  );
};

export default Homepage;
