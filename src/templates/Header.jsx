import React from "react";
import { FiSearch, FiMoreHorizontal, FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-user">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
          alt="user-pic"
          className="header-user-image"
        />
        <p className="header-user-name">Kanjut Kundang</p>
      </div>
      <div className="header-options">
        <div className="header-op-search">
          <FiSearch />
        </div>
        <div className="header-op-call">
          <FiPhone />
        </div>
        <div className="header-op-more">
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
