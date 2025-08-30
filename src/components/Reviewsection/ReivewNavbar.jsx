import React from "react";
import { Link } from "react-router-dom";

function ReivewNavbar() {
  return (
    <div className="absolute -top-7 lg:-top-10 left-1 min-[375px]:left-6 min-[425px]:left-12 sm:left-28 md:left-40 lg:left-56 xl:left-[30%] w-[10rem] py-[1rem] px-5 lg:py-[1.57rem] lg:px-10 bg-secondary rounded-xl cursor-pointer">
      <Link to="/">
        <h3 className="text-white text-[.8rem] lg:text-[1.1rem]">All</h3>
      </Link>
      <div className="absolute top-0 translate-x-[14%] w-[16rem] min-[375px]:w-[17rem] sm:w-[22rem] lg:w-[30rem] h-full bg-primary flex rounded-xl">
        <div className="flex justify-between items-center">
          <Link to="/realState">
            <div className="text-white text-[.8rem] sm:text-[1.1rem] min-[1440px]:text-2xl border-r px-3 sm:px-5 lg:px-10">
              <p>Real State</p>
            </div>
          </Link>
          <Link to="/e-commerce">
            <div className="text-white text-[.8rem] lg:text-[1.1rem] border-r px-3 sm:px-5 lg:px-8">
              <p>E-Commerce</p>
            </div>
          </Link>
          <Link to="/ourCourse">
            <div className="text-white text-[.8rem] lg:text-[1.1rem] px-3 sm:px-5 lg:px-8px-10">
              <p>Course</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReivewNavbar;
