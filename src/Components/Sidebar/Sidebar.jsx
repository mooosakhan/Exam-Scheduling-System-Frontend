import React from "react";
import "./Sidebar.css";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div
          className="sidebar-content"
          onClick={() => navigate("/")}>
          <FiHome color="#C4D7F8" size={20} />
          <span className="sidebar-span">
            Home
          </span>
        </div>
        <div
          className="sidebar-content"
          onClick={() => navigate("/teachers")}>
          <FiHome color="#C4D7F8" size={20} />
          <span className="sidebar-span">
            Teachers
          </span>
        </div>
        <div
          className="sidebar-content"
          onClick={() => navigate("/classrooms")}>
          <FiHome color="#C4D7F8" size={20} />
          <span className="sidebar-span">
            Classrooms
          </span>
        </div>
        <div
          className="sidebar-content"
          onClick={() => navigate("/scheduling")}>
          <FiHome color="#C4D7F8" size={20} />
          <span className="sidebar-span">
            Scheduling
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
