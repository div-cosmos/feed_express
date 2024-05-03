import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="main-layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
