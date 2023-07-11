import React from "react";
import Homepage from "./Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./UserAuthentication/Registration";
import Login from "./UserAuthentication/Login";
import Dashboard from "./Dashboard/Dashboard";
import SendEmail from "./SendEmail/SendEmail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/login" Component={Login} />
          <Route path="/registration" Component={Registration} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/sendmail" Component={SendEmail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
