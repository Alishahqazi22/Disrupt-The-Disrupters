import React from "react";
import border from "../../assets/AboutAssets/AboutBorder.svg";

function TrandingProductsHeader() {
  return (
    <div className="sm:w-[27rem] xl:w-[40rem]">
      <div className="flex justify-center">
        <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] min-[2560px]:text-6xl text-primary font-semibold">
        Trending Products
        </h1>
      </div> 
      <div className="flex justify-center">
        <img className="text-[.5rem] md:text-lg lg:text-xl min-[2560px]:w-[30rem] xl:py-4" src={border} alt="" />
      </div>
      <div>
        <p className="text-[#626262] mt-1  text-[.8rem] sm:text-[1.1rem] min-[2560px]:text-xl font-semibold">
          To catch the attention of users interested in shopping.
        </p>
      </div>
    </div>
  );
}

export default TrandingProductsHeader;
