import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="px-10 pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
