import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0 flex ">
        <div className="col-md-3 ">
          <SideBar />
        </div>
        <div className="content col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
