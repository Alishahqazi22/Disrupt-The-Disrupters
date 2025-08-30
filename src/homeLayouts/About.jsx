import React from "react";
import AboutGrid01 from "../components/About/AboutGrid01";
import AboutGrid02 from "../components/About/AboutGrid02";
import AboutHeader from "../components/About/AboutHeader";
import { aboutCards } from "../context/Index";

function About() {
  return (
    <section className="px-12 sm:px-16 lg:px-36 py-6 lg:py-10">
      <div className="flex justify-center text-center w-full">
        <AboutHeader />
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 justify-center items-center py-6 lg:py-20">
        <AboutGrid01 />
        <AboutGrid02 />
      </div>
      <div  className="grid grid-cols-1 sm:grid-cols-3 gap-1 lg:gap-8">
        
      {aboutCards.map((card, index) => (
        <div key={index}>
          <div className="flex gap-3 pb-1 lg:pb-4 justify-start">
              <img className="h-8 w-6 lg:h-8 lg:w-8 -secondary" src={card.icon} alt="" />
              <h3 className="font-bold text-[1.3rem] lg:text-[1.4rem]">{card.heading}</h3>
          </div>
          <p className="pl-11 text-[.8rem] lg:text-base">{card.para}</p>
        </div>
      ))}
      </div>
    </section>
  );
}

export default About;
