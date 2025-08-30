import React from 'react';
import border from "../../assets/AboutAssets/AboutBorder.svg";

function AboutHeader() {
  return (
    <div className="w-[11rem] sm:w-[15rem] block">
          <h1 className="text-[1.9rem] sm:text-[2rem] lg:text-[2.5rem] text-primary font-semibold">About Us</h1>
          <img src={border} alt="" />
          <p className="text-[#626262] mt-1 text-[.8rem] sm:text-[1.1rem] font-semibold">
            Who we are and what we do
          </p>
        </div>
  )
}

export default AboutHeader