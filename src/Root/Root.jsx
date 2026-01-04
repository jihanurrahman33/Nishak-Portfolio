import React from "react";
import { Outlet } from "react-router-dom";
import CustomCursor from "../Components/CustomCursor";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen relative z-10 cursor-none">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
