"use client";
import { Landing } from "./Landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./signup/page";
import Login from "./signin/page";
import Dashboard from "./dashboard/page";
import ProfilePage from "./dashboard/profile/ProfilePage";
import Appointments from "./dashboard/appointments/page";
export default function Home() {
  return (
    <Router>
      <Landing />
      <Routes>
        <Route path="/signup" Component={SignUp} />
        <Route path="/signin" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/appointments" Component={Appointments} />
        <Route path="/profile" Component={ProfilePage} />
      </Routes>
    </Router>
  );
}
