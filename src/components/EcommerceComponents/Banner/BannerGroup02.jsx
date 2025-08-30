import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function BannerGroup02() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-md sm:text-xl md:text-[2rem] lg:text-[3.5rem] text-center font-semibold leading-tight sm:leading-snug lg:w-96">
        Your Trusted Online Store
      </h1>
      <p className="text-[.6rem] sm:text-[.6rem] md:text-[.6rem] lg:text-[.9rem] text-center mt-1 sm:mt-2 w-[80%] min-[375px]:w-[50%] lg:w-[35rem]">
        Explore a wide range of high-quality products handpicked for style,
        performance, and everyday value. Whether you're shopping for essentials,
        gifts, or something just for you we’ve made it fast, secure, and
        hassle-free.
      </p>
      <Link to="/allproducts">
        <button className="flex btn-primary bg-primary hover:bg-secondary gap-[2px] mt-2 sm:mt-4 md:mt-6 lg:mt-10 px-3 sm:px-4 md:px-5 lg:px-7 sm:py-2 lg:py-4">
          {/* <BsCart4 className="lg:w-5 lg:h-4" /> */}
          <span className="text-[.4rem] sm:text-base">Shop Now</span>
          <FiArrowDownRight className="w-[.3rem] h-[.3rem] sm:w-4 sm:h-4 lg:w-5 lg:h-4" />
        </button>
      </Link>
    </div>
  );
}

export default BannerGroup02;
