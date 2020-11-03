import React from "react";
import { Header } from "../../templates";
import { Messages } from "../../components";
import "../../styles/pages.scss";
import { FiSmile, FiPaperclip, FiSend } from "react-icons/fi";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Messages />
        <div className="main-footer">
          <button className="btn btn-outline-light custom-btn">
            <FiSmile />
          </button>
          <div className="spacer10"></div>
          <div className="form-group">
            <input
              type="text"
              className="form-control input-chat"
              id="search"
              name="search"
              autoComplete="off"
              placeholder="Write a message..."
            />
          </div>
          <div className="spacer10"></div>
          <button className="btn btn-outline-light custom-btn">
            <FiPaperclip />
          </button>
          <div className="spacer10"></div>
          <div className="spacer10"></div>
          <button className="btn btn-primary">
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
