import React from "react";
import Hero1 from "../assets/HeroAssets/Hero1.png";
import Hero2 from "../assets/HeroAssets/Hero2.png";
import Hero3 from "../assets/HeroAssets/Hero3.png";
import Hero4 from "../assets/HeroAssets/Hero4.png";
import Hero5 from "../assets/HeroAssets/Hero5.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";
import HomeIcon from "../assets/HeroAssets/HomeIcon.svg";

function HeroSection() {
  return (
    <div className="w-full md:mt-2 lg:mt-0 relative z-10">
      <div className="md:flex justify-evenly gap-2">
        <div className="hidden xl:grid grid-flow-row gap-2">
          <img
            className="h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[15rem]"
            src={Hero1}
            alt=""
          />
          <img
            className="h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[15rem]"
            src={Hero2}
            alt=""
          />
        </div>
        <div className="relative z-0">
            <img
              className="h-[14.5rem] sm:h-[25.5rem] md:h-[26rem] lg:h-[34rem] xl:h-[30.5rem]"
              src={Hero3}
              alt=""
            />
          <div className="absolute -top-10 sm:top-1 lg:-top-1 h-[20.5rem] lg:h-[30.5rem] text-white w-full flex justify-center items-center lg:px-40">
            <div className="text-2xl sm:text-[3rem] lg:text-[3.5rem] text-center font-semibold leading-tight sm:leading-snug">
              <h1>Everything You Need</h1>
              <h1> In One Place</h1>
              <p className="text-[.7rem] sm:text-[1rem] lg:text-[.9rem] mt-1">
                Buy products, browse properties, and enroll in top courses.
              </p>
              <div className="pt-5 flex justify-evenly max-[425px]:gap-2 lg:gap-0">
                <Link to="/allproducts">
                  <button className="flex btn-primary bg-primary gap-[2px]">
                    <BsCart4 className="text-[.7rem] lg:w-5 lg:h-4" />
                    <span className="text-[.6rem]">Shop Now</span>
                    <FiArrowDownRight className="w-[.7rem] h-[.7rem] sm:w-3 sm:h-3 lg:w-5 lg:h-4" />
                  </button>
                </Link>
                <Link to="#">
                  <button className="flex btn-primary bg-secondary gap-[2px]">
                    <img
                      src={HomeIcon}
                      className="w-[.6rem] h-[.6rem] sm:w-3 sm:h-3 lg:w-5 lg:h-4"
                    />
                    <span className="text-[.6rem]">View Properties</span>
                    <FiArrowDownRight className="w-[.7rem] h-[.7rem] sm:w-3 sm:h-3 lg:w-5 lg:h-4" />
                  </button>
                </Link>
                <Link to="#">
                  <button className="flex btn-primary bg-[#F6F2EF] text-black gap-[2px] pl-5 sm:pl-9">
                    <span className="text-[.6rem]">Explore Course</span>
                    <FiArrowDownRight className="w-[.7rem] h-[.7rem] sm:w-3 sm:h-3 lg:w-5 lg:h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:grid grid-flow-row gap-2">
          <img
            className="h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[15rem]"
            src={Hero4}
            alt=""
          />
          <img
            className="h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[15rem]"
            src={Hero5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
