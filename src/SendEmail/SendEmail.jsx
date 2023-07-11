import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiPaperAirplane } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link, useNavigate, Navigate } from "react-router-dom";

import "./SendEmail.css";
const SendEmail = () => {
  const [present_user, setPresentUser] = useState({});

  const logouthandler = (e) => {
    localStorage.removeItem(`token`);
  };
  const [sendmail_details, setSendmail_details] = useState({
    email_title: "",
    email_subject: "",
    email_content: "",
    created_ByUser: present_user.email_address,
    email_list: "",
  });
  const sendmail_onchangehandler = (e) => {
    setSendmail_details((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    axios
      .get(`https://bulkemailtool-backend-1d7l.onrender.com/myprofile`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => setPresentUser(res.data));
  }, []);
  let {
    email_title,
    email_subject,
    email_content,
    created_ByUser,
    email_list,
  } = sendmail_details;
  created_ByUser = present_user.fullname;

  const sendmail_submithandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://bulkemailtool-backend-1d7l.onrender.com/sendmail`,
        sendmail_details,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        alert(res.data);
        setSendmail_details({
          email_title: "",
          email_subject: "",
          email_content: "",
          created_ByUser: "",
          email_list: "",
        });
      });
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="sendEmail-section">
      <div className="navbar-section">
        <div className="navbar flex justify-between">
          <div className="left-nav-section flex items-center">
            <div className="logoname">maillaunch</div>
            <div className="iconlogo">
              <HiPaperAirplane className="icon" />
            </div>
          </div>
          <div className="right-nav-section flex items-center">
            <div className="flex items-center">
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className=" flex items-center">
              <Link to="/SchedulEmail">Schedule Email</Link>
            </div>

            <div className="login flex items-center" onClick={logouthandler}>
              <Link to="/login">LogOut</Link>
              <BiLogOut className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sendmail-form flex items-center justify-evenly">
        <div className="sendmail_form w-96">
          <div className="send_header text-xl font-bold text-center">
            Send Mail
          </div>
          <form
            action=""
            className="flex flex-col"
            onSubmit={sendmail_submithandler}
          >
            <input
              type="text"
              placeholder="Email Title"
              name="email_title"
              value={email_title}
              onChange={sendmail_onchangehandler}
            />
            <input
              type="text"
              placeholder="Email Subject"
              name="email_subject"
              value={email_subject}
              onChange={sendmail_onchangehandler}
            />
            <textarea
              type="text"
              placeholder="Email Body"
              name="email_content"
              value={email_content}
              onChange={sendmail_onchangehandler}
            />
            <textarea
              type="text"
              placeholder="Enter the recepient details seperated by commas(,)"
              name="email_list"
              value={email_list}
              onChange={sendmail_onchangehandler}
            />
            <button className="btnn bg-green-500">Send </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
