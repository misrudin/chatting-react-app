import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";
import List from "./List";

const Wrapper = ({ auth, children }) => {
  return (
    <>
      {auth ? (
        <div className="app">
          <div className="app-sidebar">
            <Sidebar />
          </div>

          <div className="app-list">
            <List />
          </div>

          <main className="app-main">{children}</main>
        </div>
      ) : (
        <main className="app-main">{children}</main>
      )}
    </>
  );
};

export default React.memo(Wrapper);
