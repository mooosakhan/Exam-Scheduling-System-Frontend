import React from "react";
import Home from "../Components/Home/Home";
import Classrooms from "./Classrooms";
import Teachers from "./Teachers";
import Scheduling from "./Scheduling";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="main-cont">
        <Sidebar />
        <Routes>
          {/* Classrooms Route */}
          <Route path="/" element={<Home />} />
          <Route
            path="/classrooms"
            element={<Classrooms />}
          />

          {/* Teachers Route */}
          <Route
            path="/teachers"
            element={<Teachers />}
          />

          {/* Scheduling Route */}
          <Route
            path="/scheduling"
            element={<Scheduling />}
          />
        </Routes>
      </div>{" "}
    </div>
  );
};

export default Dashboard;
