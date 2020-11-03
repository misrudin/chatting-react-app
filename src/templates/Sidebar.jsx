import React from "react";
import {
  FaRegComments,
  FaRegCommentDots,
  FaRegUserCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="aside">
      <div className="aside-header">
        <FaRegComments className="app-icon" />
      </div>
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="aside-menu">
        <button className="btn btn-primary menu-item active">
          <FaRegCommentDots className="menu-icon" />
        </button>
        <div className="spacer10"></div>
        <button className="btn btn-primary menu-item">
          <FaRegCommentDots className="menu-icon" />
        </button>
      </div>
      <div className="aside-footer">
        <FaRegUserCircle className="footer-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
