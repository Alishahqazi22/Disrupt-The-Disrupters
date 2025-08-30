import React from "react";
import border from "../../assets/AboutAssets/AboutBorder.svg";

function ExpertGuidiansHeader() {
  return (
    <div className="w-[20rem] min-[768px]:w-[27rem] lg:w-[36rem] min-[2560px]:w-[60rem] text-primary ">
      <div className="flex justify-center">
        <h1 className="text-[1.45rem] sm:text-[2rem] lg:text-[2.5rem] min-[2560px]:text-6xl font-semibold w-[32rem] min-[2560px]:w-[45rem]">
        Need Expert Guidance? Let’s Talk.
        </h1>
      </div>
      <div className="flex justify-center">
        <img className="min-[2560px]:w-[40rem] min-[2560px]:py-4" src={border} alt="" />
      </div>
      <div>
        <p className="mt-1 text-[.8rem] sm:text-[1.1rem] min-[2560px]:text-2xl font-semibold">
        Whether you're planning to buy a property, launch your online store, or create a course — our consultants are here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
}

export default ExpertGuidiansHeader;
