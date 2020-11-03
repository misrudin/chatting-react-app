import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { ListOfPeople } from "../components";

const List = () => {
  return (
    <div className="list">
      <div className="list-header">
        <h4 className="list-title">Chats</h4>
        <button className="btn btn-outline-light custom-btn">
          <FiMessageSquare />{" "}
          <span className="badge badge-primary custom-badge">9+</span>
        </button>
      </div>
      {/* search */}
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="list-search">
        <div className="form-group">
          <input
            type="text"
            className="form-control search"
            id="search"
            name="search"
            autoComplete="off"
            placeholder="Search chats"
          />
        </div>
      </div>
      {/* recent */}
      <div className="list-people">
        <ListOfPeople />
      </div>
    </div>
  );
};

export default List;
