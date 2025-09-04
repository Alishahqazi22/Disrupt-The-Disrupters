import React from "react";
import { Link } from "react-router-dom";
import UpperFooter from "../components/Footer/UpperFooter";
import { MdOutlineEmail } from "react-icons/md";
// import inputIcon from "../assets/FooterAssets/Input.png";
import { FaPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#191919] text-white">
      <div className="grid grid-cols-3 sm:grid-cols-4 px-2 sm:px-8 md:px-8 lg:px-32 py-9 lg:py-14 gap-3">
        <div className="text-[.7rem] md:text-[.8rem] lg:text-base min-[2560px]:text-2xl">
          <p className="pb-3 min-[768PX]:pb-6">
            One platform for shopping, property, and learning — built for you.
          </p>
          <p>Office: 1234 North Avenue Luke Lane South Bend, IN 360001</p>
        </div>

        <div className="lg:ml-10">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-xl min-[2560px]:text-4xl font-bold text-[#00A9DA]">
            Quick Links
          </h1>
          <ul className="list-disc ml-7 md:ml-10 text-[.7rem] md:text-xs lg:text-sm min-[2560px]:text-2xl pt-4 sm:space-y-1">
           <Link to="/"> <li>Home</li></Link>
            <Link to="/allProducts"><li>Shop</li></Link>
            <li>Properties</li>
            <li>Course</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="lg:mr-10 text-sm md:text-base lg:text-xl min-[2560px]:text-4xl pb-6 font-bold text-[#00A9DA]">
            Contact Info
          </h1>
          <p className="text-[.7rem] md:text-[.8rem] lg:text-[.9rem] min-[2560px]:text-2xl">
            Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.
          </p>

          <div className="mt-4 flex items-center h-7 lg:h-8 xl:h-10 border border-[#2F2F2F]">
            <div className="flex justify-center items-center w-full px-1">
              <MdOutlineEmail className="w-4 h-4 lg:w-5 lg:h-5 text-[#00A9DA]" />
            <input
              type="text"
              placeholder="Enter your Email"
              className="h-full w-full bg-transparent text-[.45rem] min-[375px]:text-[.5rem] sm:text-xs lg:text-base min-[2560px]:text-2xl min-[375px]:px-1 text-white placeholder:text-white flex-1 focus:outline-none"
              />
              </div>
            <div className="flex justify-center items-center px-2 py-3 h-full bg-[#2F2F2F] cursor-pointer">
              <FaPaperPlane className="h-3 w-3 lg:w-5 lg:h-5 text-[#00A9DA]" />
            </div>
          </div>
        </div>
      </div>

      <UpperFooter />
    </div>
  );
}


export default Footer;
