import React from "react";
import ExpertGuidiansHeader from "../components/ExpertGuiidians/ExpertGuidiansHeader";
import KelvinDunigan from "../assets/ExpertGuidiansAssets/Group 17.png";

function ExpertGuidians() {
  return (
    <section className="sm:px-16 lg:px-3 xl:px-[11rem] py-6 lg:py-10">
      <div className="flex justify-center text-center w-full">
        <ExpertGuidiansHeader />
      </div>
      <div className="sm:px-7 lg:px-[9rem] py-10">
        <div className="sm:flex bg-[#D9D9D9] justify-items-center lg:justify-items-start py-4 lg:py-[2.7rem] sm:px-[3rem] sm:rounded-full">
            <div className="lg:w-[30%]">
                <div className="relative bg-secondary rounded-full w-[7rem] h-[7rem] sm:w-[10rem] sm:h-[10rem] lg:w-[13rem] lg:h-[13rem]">
                <div className="absolute top-2 left-2 lg:left-3 lg:w-[12.5rem]">
                    <img src={KelvinDunigan} alt="" />
                    </div>
                </div>
            </div>
            <div className="px-3 lg:pl-8 xl:pl-10 text-center md:text-start">
                <h1 className="text-primary text-[1.4rem] sm:text-[1.5rem] lg:text-[2rem] font-bold lg:pb-4">Kelvin Dunigun</h1>
                <p className="text-[.8rem] sm:text-[.9rem] min-[2560px]:text-xl">Helping businesses grow smarter online — from product sourcing to full store setup. With deep expertise in Shopify, logistics, and customer experience, I guide sellers through every stage of their e-commerce journey.</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertGuidians;
