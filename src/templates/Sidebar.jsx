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
      <div className="aside-menu">
        <FaRegCommentDots className="menu-icon" />
        <FaRegCommentDots className="menu-icon" />
        <FaRegCommentDots className="menu-icon" />
      </div>
      <div className="aside-footer">
        <FaRegUserCircle className="footer-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
