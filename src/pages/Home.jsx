import React from "react";
import HeroSection from "../homeLayouts/HeroSection";
import About from "../homeLayouts/About";
import OurService from "../homeLayouts/OurService";
import TrandingProducts from "../homeLayouts/TrandingProducts";
import Features from "../homeLayouts/Features";
import TopCourse from "../homeLayouts/TopCourse";
import ExpertGuidians from "../homeLayouts/ExpertGuidians";
import ReveiwSection from "../homeLayouts/ReveiwSection";

function Home() {
  return (
    <div className="z-0">
      <HeroSection />
      <About />
      <OurService />
      <TrandingProducts />
      <Features />
      <TopCourse />
      <ExpertGuidians />
      <ReveiwSection />
    </div>
  );
}

export default Home;
