import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
