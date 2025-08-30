import React from "react";
import { MdOutlineStar } from "react-icons/md";
import ReviewBG from "../assets/ReviewAssets/8a5ab72fb35bd2b9a24cfeaa461d4362f34e8a47.jpg";
import TopIcon from "../assets/E-commerceAssets/ReviewAssets/Icon.png";
import reviewUser01 from "../assets/ReviewAssets/reviewUser01.svg";
import CheckIcon from "../assets/ReviewAssets/checkIcon.svg";
import { eCommerceReviewSectionCards } from "../context/Index";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function EcommerceReviewSection() {
  return (
    <div className="w-full h-[20rem] md:h-[26rem] lg:h-[36rem]">
      <div className="relative">
        <img
          className="h-[34rem] sm:h-[38rem] md:h-[40rem] lg:h-[50rem]"
          src={ReviewBG}
          alt=""
        />
        <div className="absolute top-0 w-[100%] h-[100%]">
          <div className="grid grid-cols-1 justify-center items-center w-full">
            <div className="flex justify-center items-end py-10 md:pt-14 lg:py-20">
              <img className="w-10 lg:w-16" src={TopIcon} alt="" />
            </div>
            <div className="px-8">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={false}
              mousewheel={true}
              keyboard={true}
              loop={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="text-center flex justify-center items-center w-full h-[10rem] px-10 lg:px-14">
                  <h1 className="text-[.8rem] sm:text-[1.1rem] lg:text-[1.7rem] min-[1440px]:text-2xl font-semibold">
                    I’ve taken many online courses before, but this platform
                    stands out. The content is well-structured, the instructors
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center flex justify-center w-full px-10">
                  <h1 className="text-[.8rem] sm:text-[1.1rem] min-[1440px]:text-2xl py-10 lg:text-[1.7rem] font-semibold">
                    I’ve taken many online courses before, but this platform
                    stands out. The content is well-structured, the instructors
                    are genuinely engaging, and I love how easy it is to track
                    my progress. It actually feels like I’m in a real classroom
                    — but better!
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
            <div className="flex justify-center my-8 sm:my-12">
              <div className="lg:w-[20%] flex gap-1 md:gap-2">
                <div className="w-14 lg:w-14">
                  <img src={reviewUser01} alt="" />
                </div>
                <div>
                  <div className="flex gap-1 items-center sm:h-6">
                    <h3 className="font-semibold text-[.6rem] sm:text-sm lg:text-base">
                      Sandra Farmer
                    </h3>
                    <img
                      className="w-[.6rem] h-[.6rem] sm:w-4 sm:h-4 lg:h-5 lg:w-5 mt-[2px]"
                      src={CheckIcon}
                      alt=""
                    />
                  </div>
                  <p className="text-[.7rem] sm:text-[.9rem] font-semibold text-[#999999] ">
                    Assistant Manager
                  </p>
                  <div className="flex">
                    <MdOutlineStar className="text-[#F9BF00] w-4 h-3 sm:w-4 sm:h-4" />
                    <MdOutlineStar className="text-[#F9BF00] w-4 h-3 sm:w-4 sm:h-4" />
                    <MdOutlineStar className="text-[#F9BF00] w-4 h-3 sm:w-4 sm:h-4" />
                    <MdOutlineStar className="text-[#F9BF00] w-4 h-3 sm:w-4 sm:h-4" />
                    <MdOutlineStar className="text-[#F9BF00] w-4 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:px-16 gap-1 sm:gap-3 xl:gap-14">
              {eCommerceReviewSectionCards.map((card, index) => (
                <div
                  key={index}
                  className="pl-1 sm:pl-4 lg:pl-6 pt-4 lg:pt-6 h-16 sm:h-28 xl:h-36 rounded-2xl w-full bg-white flex gap-1 lg:gap-3 items-start"
                >
                  <img
                    className="w-[2rem] h-[1.5rem] sm:w-[3rem] sm:h-[3rem] xl:w-[3.7rem] xl:h-[3.7rem] sm:pt-1"
                    src={card.icon}
                    alt=""
                  />
                  <div>
                    <div>
                      <span className="text-[.9rem] sm:text-[1.7rem] xl:text-[2.4rem] font-bold flex sm:items-center">
                        {card.amount}
                        <p className="text-[.9rem] sm:text-[2rem] xl:text-[2.7rem]">
                          +
                        </p>
                      </span>
                      <h3 className="text-[.5rem] sm:text-[.8rem] xl:text-[.93rem] text-[#666666] font-semibold">
                        {card.lebal}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceReviewSection;
