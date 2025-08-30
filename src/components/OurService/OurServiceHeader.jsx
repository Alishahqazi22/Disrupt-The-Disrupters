import React from "react";
import border from "../../assets/AboutAssets/AboutBorder.svg";

function OurServiceHeader() {
  return (
    <div className="w-[20rem] min-[2560px]:w-[30rem] flex flex-col">
      <h1 className="text-[1.7rem] sm:text-[2rem] lg:text-[2.5rem] min-[2560px]:text-6xl text-primary font-semibold">Our Services</h1>
      <img className="min-[2560px]:w-[30rem]" src={border} alt="" />
      <p className="text-[#626262] mt-1 text-[.8rem] sm:text-[1.1rem] min-[2560px]:text-2xl font-semibold">
        Our unique process system
      </p>
    </div>
  );
}

export default OurServiceHeader;
