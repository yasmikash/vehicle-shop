import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <ToastContainer />
      <Navigation />
      <div className="px-10 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
