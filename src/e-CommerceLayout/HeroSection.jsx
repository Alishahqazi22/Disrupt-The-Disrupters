import React from "react";
import BannerBG from "../assets/E-commerceAssets/HeroSectionAssets/Banner.png";
import BannerGroup01 from "../components/EcommerceComponents/Banner/BannerGroup01";
import BannerGroup02 from "../components/EcommerceComponents/Banner/BannerGroup02";
import BannerGroup03 from "../components/EcommerceComponents/Banner/BannerGroup03";

function HeroSection() {
  return (
    <section className="w-full h-[10rem] sm:h-[16.5rem] md:h-[18.5rem] lg:h-[35.5rem]">
      <div className="relative">
        <img className="w-full h-[10rem] sm:h-[16.5rem] md:h-[18.5rem] lg:h-[35.5rem]" src={BannerBG} alt="banner" />
        <div className="absolute top-0 size-full flex justify-center text-white bg-gradient-to-t from-primary/80 to-transparent">
          <div className="absolute top-0 left-0 hidden sm:block w-[9%] md:w-[6] lg:w-[22%] h-[80%] mt-4 sm:mt-6 md:mt-7 lg:mt-16">
            <div className="grid lg:grid-cols-2">
              <BannerGroup01 />
            </div>
          </div>
          <BannerGroup02 />
          <div className="absolute top-0 right-20 lg:right-0 hidden sm:block w-[11%] lg:w-[24%] h-[80%] mt-4 sm:mt-6 md:mt-7 lg:mt-16">
            <div className="grid lg:grid-cols-2">
              <BannerGroup03 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
