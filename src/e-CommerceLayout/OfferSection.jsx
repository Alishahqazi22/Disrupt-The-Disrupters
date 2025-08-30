import React from "react";
import Offer01 from "../assets/E-commerceAssets/OfferSectionAssets/Offer01.png";
import Offer02 from "../assets/E-commerceAssets/OfferSectionAssets/Offer02.png";
import Offer03 from "../assets/E-commerceAssets/OfferSectionAssets/Offer03.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swipper.css";
import "swiper/css/effect-cards";
// import "./styles.css";
import { EffectCards } from "swiper/modules";

function OfferSection() {
  return (
    <div className="w-full h-[40%] px-14 sm:px-2 md:px-10 lg:px-28 pt-12 xl:pt-24">
      <div className="hidden sm:grid grid-cols-3 gap-2 sm:gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-full h-[90%] rounded-lg sm:rounded-xl lg:rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <img
            className="size-full rounded-lg sm:rounded-xl lg:rounded-3xl"
            src={Offer01}
            alt=""
          />
          <div className="absolute -top-1 w-[60%] sm:w-[70%] h-full p-[6px] sm:p-4 xl:p-8">
            <h3 className="text-[.5rem] sm:text-[.8rem] md:text-[.8rem] lg:text-base xl:text-[1.5rem] font-semibold">
              Phone Case
            </h3>
            <p className="text-[.3rem] sm:text-[.8rem] md:text-[.7rem] lg:text-[.7rem] xl:text-[.9rem] font-semibold text-[#666666]">
              At prices for every budget.
            </p>
            <p className="uppercase text-[.3rem] sm:text-[.8rem] md:text-[.7rem] lg:text-[.7rem] xl:text-[1rem] font-semibold text-[#666666] mt-[.2rem] sm:mt-[.6rem] md:mt-[.5rem] xl:mt-8">
              From to
            </p>
            <h3 className="text-[.4rem] sm:text-[.8rem] md:text-[.8rem] lg:text-base xl:text-[1.5rem] font-bold text-primary">
              $19.99
            </h3>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-full h-[90%] rounded-lg sm:rounded-xl lg:rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <img
            className="size-full rounded-lg sm:rounded-xl lg:rounded-3xl"
            src={Offer02}
            alt=""
          />
          <div className="absolute -top-1 w-[70%] sm:w-[80%] h-full p-[6px] sm:p-4 xl:p-8">
            <p className="text-[.4rem] sm:text-[.8rem] md:text-[.8rem] lg:text-[.9rem] font-semibold text-[#666666]">
              SALE UP TO
            </p>
            <h3 className="text-[.4rem] sm:text-[.8rem] md:text-[.8rem] lg:text-base xl:text-[1.5rem] font-bold text-primary">
              20% Off
            </h3>
            <p className="text-[.34rem] sm:text-[.8rem] md:text-[.7rem] lg:text-[.9rem] font-semibold text-[#666666] mt-[.6rem] sm:mt-[.8rem] md:mt-[.5rem] :mt-14">
              Your better half deserves the very best.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-full h-[90%] rounded-lg sm:rounded-xl lg:rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <img
            className="size-full rounded-lg sm:rounded-xl lg:rounded-3xl"
            src={Offer03}
            alt=""
          />
          <div className="absolute -top-1 w-[60%] sm:w-[70%] h-full p-[6px] sm:p-4 xl:p-8">
            <h3 className="text-[.4rem] sm:text-[.8rem] md:text-[.9rem] lg:text-base xl:text-[1.5rem] font-semibold">
              Shop By Business Use
            </h3>
            <p className="uppercase text-[.4rem] sm:text-[.8rem] md:text-[.7rem] lg:text-[.7rem] xl:text-[1rem] font-semibold text-[#666666] mt-[.4rem] md:mt-[.8rem] xl:mt-8">
              Price Only
            </p>
            <h3 className="text-[.4rem] sm:text-[.8rem] md:text-[.8rem] lg:text-base xl:text-[1.5rem] font-bold text-secondary">
              20% Off
            </h3>
          </div>
        </motion.div>
      </div>
      <div className="static sm:hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className="relative w-full h-[90%] rounded-3xl">
            <img
              className="size-full rounded-3xl"
              src={Offer01}
              alt=""
            />
            <div className="absolute -top-1 h-full p-3">
              <h3 className="font-semibold">
                Phone Case
              </h3>
              <p className="text-[.8rem] md:text-[1rem] font-semibold text-[#666666]">
                At prices for every budget.
              </p>
              <p className="uppercase text-[.7rem] md:text-[1rem] font-semibold text-[#666666] mt-1">
                From to
              </p>
              <h3 className="text-[1.5rem] font-bold text-primary">
                $19.99
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-[60%] sm:w-[55%] h-[90%] rounded-3xl">
            <img
              className="size-full rounded-3xl"
              src={Offer02}
              alt=""
            />
            <div className="absolute -top-1 w-[60%] sm:w-[55%] h-full p-6 sm:p-8">
              <p className="font-semibold text-[#666666]">
                SALE UP TO
              </p>
              <h3 className="text-[.9rem] md:text-[1.5rem] font-bold text-primary">
                20% Off
              </h3>
              <p className="text-[.8rem] md:text-[1rem] font-semibold text-[#666666] mt-[.6rem] sm:mt-[.8rem] md:mt-[.5rem]">
                Your better half deserves the very best.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-[60%] sm:w-[55%] h-[90%] rounded-3xl">
            <img
              className="size-full rounded-3xl"
              src={Offer03}
              alt=""
            />
            <div className="absolute -top-1 w-[70%] sm:w-[55%] h-full p-6 sm:p-8">
              <h3 className="text-[.9rem] md:text-[1rem] font-semibold">
                Shop By Business Use
              </h3>
              <p className="uppercase font-semibold text-[#666666] mt-[.4rem] md:mt-[.8rem] lg:mt-8">
                Price Only
              </p>
              <h3 className="text-[1.5rem] font-bold text-secondary">
                20% Off
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-[60%] sm:w-[55%] h-[90%] rounded-3xl">
            <img
              className="size-full rounded-lg sm:rounded-3xl"
              src={Offer02}
              alt=""
            />
            <div className="absolute -top-1 w-[60%] sm:w-[55%] h-full p-6 sm:p-8">
              <p className="font-semibold text-[#666666]">
                SALE UP TO
              </p>
              <h3 className="text-[.9rem] md:text-[1.5rem] font-bold text-primary">
                20% Off
              </h3>
              <p className="text-[.8rem] md:text-[1rem] font-semibold text-[#666666] mt-[.6rem] sm:mt-[.8rem] md:mt-[.5rem]">
                Your better half deserves the very best.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OfferSection;
