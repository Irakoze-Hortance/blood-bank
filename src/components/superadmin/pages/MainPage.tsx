"use client";

import { Sidebar } from "@/components/Sidebar/Sidebar";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Donors from "./Donors";
import Schedule from "./Schedule";
import Volunteers from "./Volunteers";


const MainPage = () => {
  return (
    <Router>
    <div className="flex">
      {/* <Sidebar /> */}
      <Sidebar/>
      

      <div className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hospitals" element={<Schedule />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/volunteers" element={<Volunteers />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
};

export default MainPage;
