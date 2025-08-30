import React from "react";
import logo from "../assets/HeaderIcons/Group 1.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img src={logo} alt="Loading..." className="size-[10rem] animate-bounce" />
    </div>
  );
};

export default Loader;
