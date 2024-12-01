import React from "react";
import Header from "../../Components/Header/Header";
import LowerHeader from "../../Components/Header/LowerHeader";
import { Outlet} from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <LowerHeader />
      <main>{children}</main>
      <Outlet />
    </div>
  );
};

export default Layout;
