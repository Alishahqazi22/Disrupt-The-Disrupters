import React from "react";
import OurServiceHeader from "../components/OurService/OurServiceHeader";
import { OurServiceCards } from "../context/Index";

function OurService() {
  return (
    <section className="px-10 sm:px-16 lg:px-36 py-6 lg:py-10 bg-gradient-to-t from-[#FFFFFF] to-[#F4F6FB]">
      <div className="flex justify-center text-center w-full">
        <OurServiceHeader />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
        {OurServiceCards.map((card, index) => (
          <div key={index} className="relative">
            <div className="text-[13rem] text-red-500/10 text-center font-bold">
              {card.bgNum}
              <div className="absolute -top-8 translate-y-[100%] w-full h-40">
                <div className="block">
                  <img
                    className="w-5 h-7 lg:w-8 lg:h-9 ml-36 sm:ml-20 lg:ml-24 xl:ml-44 min-[2560px]:ml-[22rem]"
                    src={card.icon}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-base lg:text-2xl min-[1440px]:text-3xl text-primary mb-6 lg:mb-12">{card.heading}</h3>
                  <p className="text-[.9rem] lg:text-sm min-[1440px]:text-xl text-[#626262]  py-1 lg:px-1 lg:py-2 font-normal">{card.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurService;
