import React from "react";
import { FiMoreHorizontal, FiPhone, FiCheckCircle } from "react-icons/fi";
import {  noUserImage } from "../assets";


const Header = ({data}) => {
  return (
    <div className="header">
      <div className="header-user">
        <img
          src={data?.avatar_url ? data?.avatar_url : noUserImage}
          alt="user-pic"
          className="header-user-image"
        />
        <p className="header-user-name">{data?.room_name}</p>
      </div>
      <div className="header-options">
        <button className="btn btn-outline-primary header-op-search custom-btn">
          <FiCheckCircle />
        </button>
        <div className="spacer10"></div>
        <button className="btn btn-outline-warning header-op-call custom-btn">
          <FiPhone />
        </button>

        <button className="btn btn-outline-light header-op-more custom-btn">
          <FiMoreHorizontal />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);
