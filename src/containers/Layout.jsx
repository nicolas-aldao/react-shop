import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  // it'll receive children to contain them
  return (
    <React.Fragment>
      <Header></Header>
      <div className="layout">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
