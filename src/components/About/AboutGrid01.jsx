import React from 'react';
import checkBoxIcon from "../../assets/AboutAssets/CheckBoxIcon.svg";


function AboutGrid01() {
  return (
    <div className=" lg:tracking-tighter pr-[.5rem] lg:pr-[5.2rem]">
          <h1 className="text-primary text-[1.2rem] lg:text-[1.5rem] font-bold pb-3">
            Get to know us better.
          </h1>
          <div className="text-[.8rem] lg:text-[1rem] text-[#626262] pb-3 lg:pb-5">
            <p className="pb-3 lg:pb-5">
              At <span className="font-bold">Disrupt The Disrupters,</span> we
              believe in making life simpler by bringing everything you need
              onto one platform.
            </p>
            <p className="pb-3 lg:pb-5">
              Whether you're looking to buy quality products, explore verified
              real estate listings, or learn new skills from expert instructors,
              we’re here to make that journey seamless, secure, and enjoyable.
            </p>
            <div className="text-black font-normal pb-3 lg:pb-5">
              <p className="flex gap-3 lg:gap-4 pb-1 lg:pb-3">
                <img className="w-3 h-4 lg:h-5 lg:w-5 mt-1" src={checkBoxIcon} alt="" />
                <span className="pb-1">
                  All-in-one platform for shopping, real estate, and learning.
                </span>
              </p>
              <p className="flex gap-3 lg:gap-4 pb-1 lg:pb-3">
                <img className="w-3 h-4 lg:h-5 lg:w-5 mt-1" src={checkBoxIcon} alt="" />
                <span className="pb-1">
                  Trusted quality with verified sellers, agents, and
                  instructors.
                </span>
              </p>
              <p className="flex gap-3 lg:gap-4 pb-1 lg:pb-3">
                <img className="w-3 h-4 lg:h-5 lg:w-5 mt-1" src={checkBoxIcon} alt="" />
                <span className="pb-1">
                  Built to empower you in everyday life and future growth.
                </span>
              </p>
            </div>
            <p>
              Our mission is to create a unified digital space where shopping,
              property searching, and learning come together — designed with
              your convenience in mind. We partner only with trusted sellers,
              certified property agents, and qualified educators, ensuring that
              every experience you have with us adds real value to your life.
            </p>
          </div>
        </div>
  )
}

export default AboutGrid01