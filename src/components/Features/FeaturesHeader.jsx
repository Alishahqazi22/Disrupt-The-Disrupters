import React from "react";
import border from "../../assets/AboutAssets/AboutBorder.svg";

function FeaturesHeader() {
  return (
    <div className="w-[30rem] min-[375px]:w-[23rem] sm:w-[23rem] lg:w-[38rem]">
      <div className="flex justify-center">
        <h1 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] min-[2560px]:text-6xl text-white font-semibold">
          Discover Our Featured Listings
        </h1>
      </div>
      <div className="flex justify-center">
        <img className="w-[80%] lg:w-full" src={border} alt="" />
      </div>
      <div>
        <p className="text-white mt-1 text-[.8rem] sm:text-[1.1rem] min-[2560px]:text-2xl font-semibold text-center">
          Why? Real estate buyers need instant attraction.
        </p>
      </div>
    </div>
  );
}

export default FeaturesHeader;
