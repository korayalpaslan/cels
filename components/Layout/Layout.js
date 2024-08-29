import React from "react";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <MobileMenu/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
