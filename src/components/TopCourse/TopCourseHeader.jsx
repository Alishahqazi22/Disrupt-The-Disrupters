import React from 'react';
import border from "../../assets/AboutAssets/AboutBorder.svg";
    
function TopCourseHeader() {
  return (
    <div className="w-[28rem] text-primary ">
          <div className="flex justify-center">
            <h1 className="text-[1.7rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold">
            Top Course
            </h1>
          </div>
          <div className="flex justify-center">
            <img src={border} alt="" />
          </div>
          <div>
            <p className="mt-1 text-[.8rem] sm:text-[1.1rem] font-semibold">
            Why? To pull in users interested in education and skills.
            </p>
          </div>
        </div>
  )
}

export default TopCourseHeader