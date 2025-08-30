import React from "react";
import ReviewBG from "../assets/ReviewAssets/8a5ab72fb35bd2b9a24cfeaa461d4362f34e8a47.jpg";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { popularCards } from "../context/Index";

function EcommercePopularCategories() {
  // const finalCards =
  //   popularCards.length <= 3
  //     ? [...popularCards, ...popularCards]
  //     : popularCards;
  return (
    <div className="w-full h-[24rem] sm:h-[32rem] xl:h-[47rem]">
      <div className="relative">
        <img
          className="w-full h-[20rem] sm:h-[27rem] xl:h-[38rem]"
          src={ReviewBG}
          alt=""
        />
        <div className="absolute top-0 w-full h-[43.1rem]">
          <div className="flex justify-between text-center w-full pt-6 sm:pt-10 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-16 lg:px-28">
            <div>
              <h1 className="tracking-tighter sm:tracking-normal text-[1rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold">
                Most Popular Categories
              </h1>
            </div>
            <Link to="/">
              <div className="tracking-tighter sm:tracking-normal flex justify-end items-center text-xs md:text-sm lg:text-base sm:mr-8 font-semibold">
                <p>See All Shops</p>
                <FiArrowDownRight className="w-2 sm:h-2 lg:w-5 lg:h-[1.1rem]" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-6 px-4 sm:px-16 lg:px-28">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={false}
              mousewheel={true}
              keyboard={true}
              loop={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper size-full"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween:16},
                640: { slidesPerView: 2, spaceBetween:16 },
                1024: { slidesPerView: 3, spaceBetween:16 },
              }}
            >
              {popularCards.map((cat) => (
                <SwiperSlide key={cat.name}>
                  <div className="relative flex h-[19rem] sm:size-full rounded-2xl cursor-pointer">
                    <img
                      className="h-full w-full"
                      src={cat.image}
                      alt={cat.name}
                    />
                    <div className="absolute bottom-4 left-16 lg:bottom-8 lg:left-8">
                      <h1 className="text-white text-sm md:text-md lg:text-lg">
                        {cat.name}
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommercePopularCategories;
