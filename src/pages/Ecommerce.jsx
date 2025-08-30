import React from "react";
import HeroSection from "../e-CommerceLayout/HeroSection";
import OfferSection from "../e-CommerceLayout/OfferSection";
import TopBestSellers from "../e-CommerceLayout/TopBestSellers";
import EcommerceTrandingProducts from "../e-CommerceLayout/EcommerceTrandingProducts";
import MostSellingItems from "../e-CommerceLayout/MostSellingItems";
import EcommerceReviewSection from "../e-CommerceLayout/EcommerceReviewSection";
import EcommercePopularCategories from "../e-CommerceLayout/EcommercePopularCategories";

function Ecommerce() {
  return (
    <div className="z-0">
      <HeroSection />
      <OfferSection />
      <TopBestSellers />
      <EcommerceTrandingProducts />
      <MostSellingItems />
      <EcommercePopularCategories />
      <EcommerceReviewSection />
    </div>
  );
}

export default Ecommerce;
