import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  // it'll receive children to contain them
  return (
    <React.Fragment>
      <Header></Header>
      <div className="layout">{children}</div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
