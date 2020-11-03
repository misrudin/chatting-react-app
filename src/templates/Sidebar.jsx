import React from "react";
import { FiCoffee, FiMessageCircle, FiClock, FiLogOut } from "react-icons/fi";
import { noUserImage } from "../assets";

const Sidebar = () => {
  return (
    <div className="aside">
      <div className="aside-header">
        <FiCoffee className="app-icon" />
      </div>
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="aside-menu">
        <button className="btn btn-primary menu-item active">
          <FiMessageCircle className="menu-icon" />
        </button>
        <div className="spacer10"></div>
        <div className="spacer10"></div>
        <button className="btn btn-primary menu-item">
          <FiClock className="menu-icon" />
        </button>
      </div>
      <div className="spacer10"></div>
      <div className="aside-footer">
        <button className="btn btn-outline-danger" style={{ border: "none" }}>
          <FiLogOut className="menu-icon" />
        </button>
        <div className="spacer10"></div>
        <div className="spacer10"></div>
        <div className="spacer10"></div>
        <img className="user-image" src={noUserImage} alt="noimage" />
      </div>
    </div>
  );
};

export default Sidebar;
