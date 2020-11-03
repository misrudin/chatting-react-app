import React from "react";
import { Header } from "../../templates";
import { Messages } from "../../components";
import "../../styles/pages.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Messages />
      </div>
    </div>
  );
};

export default HomePage;
