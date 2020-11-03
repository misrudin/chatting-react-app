import React from "react";
import { FiMoreHorizontal, FiPhone, FiCheckCircle } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-user">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
          alt="user-pic"
          className="header-user-image"
        />
        <p className="header-user-name">User Name</p>
      </div>
      <div className="header-options">
        <button className="btn btn-outline-primary header-op-search custom-btn">
          <FiCheckCircle />
        </button>

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
