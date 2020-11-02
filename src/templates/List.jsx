import React from "react";
import { FiSearch } from "react-icons/fi";

const List = () => {
  return (
    <div className="list">
      <h4 className="list-title">Chats</h4>
      {/* search */}
      <div className="form-group">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <FiSearch className="icon" />
            </div>
          </div>
          <input
            type="text"
            className="form-control search"
            id="search"
            name="search"
            autoComplete="off"
            placeholder="Search messages for users"
          />
        </div>
      </div>
      {/* recent */}
      <p className="list-subtitle">Recent</p>
    </div>
  );
};

export default List;
