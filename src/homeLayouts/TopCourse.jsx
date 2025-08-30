import React from "react";
import TopCourseHeader from "../components/TopCourse/TopCourseHeader";
import lectureIcon from "../assets/TopCourseAssets/LectureIcon.svg";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { ourCourseCards } from "../context/Index";
import { LuClock9 } from "react-icons/lu";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swipper.css";
import "swiper/css/effect-cards";

function TopCourse() {
  return (
    <section className="px-4 md:px-14 xl:px-28 min-[2560px]:px-[11rem] w-full">
      <div className="flex justify-center text-center w-full py-6 lg:py-10">
        <TopCourseHeader />
      </div>
      <div
        className="flex flex-col sm:flex-row justify-evenly min-[2560px]:grid-cols-6 gap-1">
        {ourCourseCards.map((item, index) => (
          <div
            key={index}
            className=" bg-primary lg:w-[22.5rem] lg:h-[30rem] rounded-sm p-3 lg:p-4 text-white"
          >
            <div className="rounded-sm">
              <img src={item.topimage} alt="" />
            </div>
            <div className="flex justify-between py-4 border-b border-[#5800B6]">
              <div className="flex items-center gap-1 lg:gap-2">
                <img
                  className="w-8 h-8 lg:w-11 lg:h-11 rounded-full"
                  src={item.userIamge}
                  alt=""
                />
                <p className="text-[.8rem] lg:text-base">{item.name}</p>
              </div>
              <div>
                <p className="text-xs lg:text-sm">{item.ratingValue}</p>
                <div></div>
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-[.75rem] lg:text-[1.05rem]">{item.title}</h3>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 lg:gap-2 items-center">
                {/* <img
                    className="p-[.2rem] lg:p-[.45rem] w-6 h-6 bg-secondary rounded-full"
                    src={clockIcon}
                    alt=""
                  /> */}
                <span className="p-[.2rem] lg:p-[.45rem] bg-secondary rounded-full flex items-center">
                  <LuClock9 />
                </span>
                <p className="text-[.8rem] lg:text-xs">{item.time}</p>
              </div>
              <div className="flex gap-1 lg:gap-2 items-center">
                <img
                  className="p-[.2rem] lg:p-[.45rem] bg-secondary rounded-full"
                  src={lectureIcon}
                  alt=""
                />
                <p className="text-[.8rem] lg:text-xs">{item.lecture}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-5 lg:pt-9">
              <div className="bg-white text-primary rounded-lg">
                <Link to="/">
                  <p className="py-[.2rem] lg:py-[.4rem] px-1 lg:px-2 text-[.8rem] font-medium">
                    Join Now
                  </p>
                </Link>
              </div>
              <div className="text-[.7rem] lg:text-base">
                <span className="line-through flex justify-end">
                  <p>$350</p>
                </span>
                <span className="flex items-center tracking-tighter mb-4">
                  <FaDollarSign className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <h3 className="text-base sm:text-[1.2rem] lg:text-[1.5rem] font-medium">
                    120
                  </h3>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden min-[425px]:px-8 min-[768px]:px-28 lg:px-2">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {ourCourseCards.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-primary lg:w-[22.5rem] lg:h-[30rem] rounded-sm p-3 lg:p-4 text-white"
            >
              <div className="rounded-sm">
                <img src={item.topimage} alt="" />
              </div>
              <div className="flex justify-between py-4 border-b border-[#5800B6]">
                <div className="flex items-center gap-1 lg:gap-2">
                  <img
                    className="w-11 h-11 rounded-full"
                    src={item.userIamge}
                    alt=""
                  />
                  <p className="text-[1rem] lg:text-base">{item.name}</p>
                </div>
                <div>
                  <p className="text-sm">{item.ratingValue}</p>
                  <div></div>
                </div>
              </div>
              <div className="py-4">
                <h3 className="text-[1rem] lg:text-[1.05rem]">{item.title}</h3>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1 lg:gap-2 items-center">
                  {/* <img
                    className="p-[.2rem] lg:p-[.45rem] w-6 h-6 bg-secondary rounded-full"
                    src={clockIcon}
                    alt=""
                  /> */}
                  <span className="p-[.2rem] lg:p-[.45rem] bg-secondary rounded-full flex items-center">
                    <LuClock9 className="w-6 h-6" />
                  </span>
                  <p className="text-[.85rem] lg:text-xs">{item.time}</p>
                </div>
                <div className="flex gap-1 lg:gap-2 items-center">
                  <img
                    className="p-[.2rem] lg:p-[.45rem] bg-secondary rounded-full w-7 h-7"
                    src={lectureIcon}
                    alt=""
                  />
                  <p className="text-[.85rem] lg:text-xs">{item.lecture}</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-5 lg:pt-9">
                <div className="bg-white text-primary rounded-lg">
                  <Link to="/">
                    <p className="py-[.2rem] lg:py-[.4rem] px-1 lg:px-2 text-[.85rem] font-medium">
                      Join Now
                    </p>
                  </Link>
                </div>
                <div className="text-[.9rem] lg:text-base">
                  <span className="line-through flex justify-end">
                    <p>$350</p>
                  </span>
                  <span className="flex items-center tracking-tighter mb-4">
                    <FaDollarSign className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
                    <h3 className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.5rem] font-medium">
                      120
                    </h3>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TopCourse;
