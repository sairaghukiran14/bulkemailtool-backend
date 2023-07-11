
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Homepage/Homepage.css";
import { HiPaperAirplane } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const logouthandler = (e) => {
    localStorage.removeItem(`token`);
  };
  const [emails, setemails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://bulkemailtool-backend-1d7l.onrender.com/displayemails`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => setemails(res.data));
  }, []);
  console.log(emails);
  return (
    <div className="dashboard-seciton">
      <div className="navbar-section">
        <div className="navbar flex justify-between">
          <div className="left-nav-section flex items-center">
            <div className="logoname">maillaunch</div>
            <div className="iconlogo">
              <HiPaperAirplane className="icon" />
            </div>
          </div>
          <div className="right-nav-section flex items-center">
            <div className="signup flex items-center">
              <Link to="/sendmail"> Send Email</Link>
              <BsArrowRightSquareFill className="" />
            </div>
            <div className="signup flex items-center">
              <Link to="/sendmail"> Schedule Email</Link>
            </div>
            <div className="login flex items-center" onClick={logouthandler}>
              <Link to="/login">LogOut</Link>
              <BiLogOut className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-content-section">
        <div className="header text-xl font-semibold text-center">
          Dashboard
        </div>
        <div className="sent_email_list">
          {emails.map((email) => (
            <div className="individual_sent_email_list flex flex-col">
              <div className="email_title text-center text-xl">
                <b>{email.email_title}</b>
              </div>

              <div className="email_description">
                <div className="subject text-center">{email.email_subject}</div>
                <div className="content text-center">
                  {email.email_description}
                </div>
              </div>
              <div className="createdBy text-sm text-center font-bold ">
                CreatedBy : A S Raghu Kiran
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
