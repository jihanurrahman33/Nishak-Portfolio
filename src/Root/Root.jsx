import React from "react";
import { Outlet } from "react-router-dom";
import CustomCursor from "../Components/CustomCursor";
import Navbar from "../Components/Navbar";
{
  /* Root component that serves as the main layout for the application. It includes a custom cursor, a navbar, and an outlet for rendering child routes. */
}
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
