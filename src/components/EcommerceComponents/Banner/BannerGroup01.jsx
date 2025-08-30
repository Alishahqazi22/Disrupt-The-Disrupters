import React from "react";
import product01 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct01.svg";
import product02 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct02.svg";
import product03 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct03.svg";
import product04 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct04.svg";
import product05 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct05.svg";
import product06 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct06.svg";

function BannerGroup01() {
  return (
    <div>
      <div className="w-full lg:w-[80%] ml-4 sm:ml-5 md:ml-6 lg:ml-12 flex gap-3 sm:gap-5 lg:gap-10">
        <img
          className="size-full sm:w-full rounded-sm sm:rounded-xl lg:rounded-3xl"
          src={product01}
          alt=""
        />
        <img
          className="lg:size-[65%] mt-3 lg:mt-5 rounded-lg lg:rounded-3xl"
          src={product02}
          alt=""
        />
      </div>
      <div className="w-[80%] ml-4 sm:ml-5 md:ml-6 lg:ml-12 flex gap-5 lg:gap-8">
        <img
          className="size-[80%] lg:size-[75%] ml-4 lg:ml-10 mt-6  rounded-lg lg:rounded-3xl"
          src={product03}
          alt=""
        />
        <img className="size-full mt-1 lg:size-[83%]" src={product04} alt="" />
      </div>
      <div className="w-[80%] ml-6 sm:ml-5 md:ml-6 lg:ml-20 flex gap-10 lg:gap-14">
        <img
          className="size-[80%] lg:size-[65%] mt-5 lg:mt-14 rounded-lg lg:rounded-3xl"
          src={product05}
          alt=""
        />
        <img
          className="w-full mt-3 lg:mt-6 rounded-lg lg:rounded-3xl"
          src={product06}
          alt=""
        />
      </div>
    </div>
  );
}

export default BannerGroup01;
