import { Button } from "@vechaiui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex px-4 py-3 justify-start items-center gap-4 bg-gray-50">
      <NavLink to="/">
        <Button variant="ghost" active={true}>
          Home
        </Button>
      </NavLink>
      <NavLink to="/shop">
        <Button variant="ghost">Shop</Button>
      </NavLink>
    </div>
  );
};

export default Navigation;
