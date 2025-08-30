import React from "react";
import product07 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct07.svg";
import product08 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct08.svg";
import product09 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct09.svg";
import product10 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct10.svg";
import product11 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct11.svg";
import product12 from "../../../assets/E-commerceAssets/HeroSectionAssets/bannerProduct12.svg";

function BannerGroup03() {
  return (
    <div>
      <div className="w-[80%] mr-4 sm:mr-5 lg:ml-10 flex gap-6 lg:gap-10">
        <img
          className="size-[70%] lg:size-[65%] mt-3 lg:mt-8 rounded-lg lg:rounded-3xl"
          src={product07}
          alt=""
        />
        <img
          className="w-full  rounded-xl lg:rounded-3xl"
          src={product08}
          alt=""
        />
      </div>
      <div className="w-[80%] mr-4 sm:mr-5 md:mr-6 lg:mr-16 flex gap-5 lg:gap-6">
        <img
          className="size-[90%] mt-1 rounded-lg lg:rounded-3xl"
          src={product09}
          alt=""
        />
        <img
          className="size-full mr-4 lg:mr-10 mt-4 lg:mt-6"
          src={product10}
          alt=""
        />
      </div>
      <div className="w-[80%] mr-6 sm:mr-5 md:mr-6 lg:ml-6 flex gap-4 lg:gap-14">
        <img
          className="size-[75%] rounded-xl ml-7 lg:rounded-3xl"
          src={product11}
          alt=""
        />
        <img
          className="size-[80%] lg:size-[65%] mt-5 lg:mt-14 rounded-lg lg:rounded-3xl"
          src={product12}
          alt=""
        />
      </div>
    </div>
  );
}

export default BannerGroup03;
