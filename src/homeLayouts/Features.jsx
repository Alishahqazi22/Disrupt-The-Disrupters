import React, { useState } from "react";
import featuresBG from "../assets/FeaturesAssets/FeatureBG.png";
import FeaturesHeader from "../components/Features/FeaturesHeader";
import { mockData } from "../context/Index";
import { FaHeart, FaMapMarkerAlt, FaShower } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuCarFront } from "react-icons/lu";
import { TfiRulerAlt2 } from "react-icons/tfi";
import icon from "../assets/FeaturesAssets/PinIcon.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import ZoomIcon from "../assets/FeaturesAssets/DoubleArrowIcon.svg";
import AddIcon from "../assets/FeaturesAssets/AddIcon.svg";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swipper.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../store/WishListSlice";
import { Dialog } from "@headlessui/react";

function Features() {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList.items);
  const propertyData = mockData.filter((item) => item.category === "property");

  const breakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
    2560: { slidesPerView: 6 },
  };
  const finalPropertiesItems =
    propertyData.length <= 2
      ? [...propertyData, ...propertyData, ...propertyData]
      : propertyData;

  const [zoomImg, setZoomImg] = useState(null);

  const isInWishList = (id) => {
    return wishListItems.some((items) => items.id === id);
  };

  const handleHeartClick = (item) => {
    dispatch(toggleWishList(item));
  };
  return (
    <div className="w-full h-[30rem] lg:h-[40rem] xl:h-[100%]">
      <div className="relative">
        <img className="h-[30rem] lg:h-[38rem] xl:h-[100%]" src={featuresBG} alt="" />
        <div className="absolute top-0 bg-primary/80 w-full h-[30rem] lg:h-full min-[425px]:px-10 sm:px-24 md:px-8 lg:px-10">
          <div className="flex justify-center mb-6 mt-2 lg:my-7 py-4 sm:py-6 lg:py-10">
            <FeaturesHeader />
          </div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={false}
              mousewheel={true}
              keyboard={true}
              loop={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
              breakpoints={breakpoints}
            >
              {finalPropertiesItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[5.7rem] h-[5rem] md:w-[9rem] md:h-[9rem] lg:w-[19rem] flex justify-between px-14 md:px-14 lg:gap-5 lg:px-10 xl:px-8"
                >
                  <Link to={`/property/${item.id}`}>
                    <div className="flex flex-col">
                      <div className="relative">
                        <img
                          className="rounded-t-md md:rounded-t h-[8rem] sm:h-[8rem] lg:h-[100%] w-full"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="absolute top-0 bg-gradient-to-t from-black/60 to-transparent w-full h-full">
                          <div className="grid grid-cols-1 h-full lg:p-1">
                            <div className="flex justify-between p-2 h-[1.9rem] sm:h-9">
                              <div className="bg-[#77C720] text-white rounded-md">
                                <p className="uppercase text-[.5rem] min-[375px]:text-[.6rem] sm:text-[.8rem] md:text-[.6rem] lg:text-[.6rem] px-1 py-[2px]">
                                  Featured
                                </p>
                              </div>
                              <div className="bg-black/60 text-white rounded-md">
                                <p className="uppercase text-[.5rem] min-[375px]:text-[.6rem] sm:text-[.8rem] md:text-[.6rem] lg:text-[.6rem] px-1 py-[2px]">
                                  {item.For}
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between items-end p-2">
                              <div className="text-white text-[.7rem] min-[375px]:text-[.9rem] sm:text-[.9rem] lg:text-[.75rem] font-medium">
                                <p>{item.amount}</p>
                                <p className="text-[.6rem] min-[375px]:text-[.7rem] sm:text-[.7rem] md:text-[.6rem] lg:text-[.45rem]">
                                  {item.EachSqfeet}
                                </p>
                              </div>
                              <div className="flex gap-1 lg:gap-2 lg:h-[1.55rem]">
                                <button
                                  className="bg-black/60 rounded-md min:h-[1.1rem]"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setZoomImg(item.image);
                                  }}
                                >
                                  <img
                                    className="m-[.2rem] lg:m-[6px] w-[1rem] h-[.9rem] lg:w-3 lg:h-3"
                                    src={ZoomIcon}
                                    alt="icon"
                                  />
                                </button>
                                <button
                                  to="/"
                                  className="bg-black/60 rounded-md min:h-[1.1rem]"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleHeartClick(item);
                                  }}
                                >
                                  <div className="">
                                    {isInWishList(item.id) ? (
                                      <FaHeart className="text-secondary w-[1rem] m-1 h-[.9rem]" />
                                    ) : (
                                      <CiHeart className="text-white h-[1.1rem] w-[1.1rem] lg:w-[1rem] m-1 lg:h-[1rem]" />
                                    )}
                                  </div>
                                </button>
                                <button
                                  to="/"
                                  className="bg-black/60 rounded-md min:h-[1.1rem]"
                                >
                                  <img
                                    className="m-[.2rem] lg:m-[6px] w-[1.1rem] h-[1rem] lg:w-3 lg:h-3"
                                    src={AddIcon}
                                    alt="icon"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white px-2 lg:px-4">
                        <div className="flex items-center h-[2rem] lg:h-[2.5rem] xl:h-[3.8rem]">
                          <h3 className="text-[.8rem] min-[375px]:text-[.9rem] sm:text-[1rem] font-medium pr-[2rem] xl:pr-20 tracking-tight lg:tracking-normal leading-tight lg:py-2">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center w-[90%] xl:h-[.7rem]">
                          <span className="text-[.6rem] min-[375px]:text-[.7rem] lg:text-[.6rem] font-medium text-[#636363] flex items-start gap-1">
                            <FaMapMarkerAlt className="mt-[.1rem]" />
                            <p>{item.address}</p>
                          </span>
                        </div>
                        <div className="sm:pb-1 lg:pb-4 xl:pb-7">
                          <div className="flex items-center gap-2 lg:gap-3 py-[3px] lg:py-[4px]">
                            <div className="flex items-center gap-[4px]">
                              <IoBedOutline className="w-[1rem] h-[1rem] sm:w-[1rem] sm:h-[1rem] md:w-[.9rem] md:h-[.9rem] lg:w-5 lg:h-5" />
                              <p className="text-[.7rem] min-[375px]:text-[.7rem] lg:text-xs font-medium mb-[1px]">
                                {item.bed}
                              </p>
                            </div>
                            <div className="flex items-center gap-[4px]">
                              <FaShower className="w-[.7rem] h-[.7rem] sm:w-[.7rem] sm:h-[.7rem] md:w-[.9rem] md:h-[.9rem] lg:w-5 lg:h-4" />
                              <p className="text-[.7rem] min-[375px]:text-[.7rem] lg:text-xs font-medium mb-[1px]">
                                {item.bath}
                              </p>
                            </div>
                            <div className="flex items-center gap-[4px]">
                              <LuCarFront className="w-[1rem] h-[1rem] sm:w-[1rem] sm:h-[1rem] lg:w-5 lg:h-5" />
                              <p className="text-[.7rem] min-[375px]:text-[.8rem] lg:text-xs font-medium mb-[1px]">
                                {item.parking}
                              </p>
                            </div>
                            <div className="flex items-center lg:gap-[4px]">
                              <TfiRulerAlt2 className="w-[1rem] h-[1rem] sm:w-[1rem] sm:h-[1rem] md:w-[.9rem] md:h-[.9rem] lg:w-[1rem] lg:h-[1rem] mb-[3px]" />
                              <span className="flex gap-1 text-[.6rem] min-[375px]:text-[.7rem] lg:text-[.7rem] font-medium mb-[1px] tracking-tighter">
                                {item.Sqfeet} Sq Ft
                              </span>
                            </div>
                          </div>
                          <p className="text-[.7rem] min-[375px]:text-xs lg:text-[.6rem] font-semibold uppercase">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border-t border-[#DCE0E0] text-[#636363] rounded-b-md md:rounded-b py-2 md:py-0">
                        <div className="flex items-center justify-between p-1 lg:p-3">
                          <div className="flex items-center gap-1 lg:gap-2">
                            <img
                              className="rounded-full h-7 min-[375px]:h-8 md:h-[1.5rem]"
                              src={item.agentimage}
                              alt="agent"
                            />
                            <p className="text-[.6rem] min-[375px]:text-[.6rem] lg:text-[.65rem] font-semibold">
                              {item.agentName}
                            </p>
                          </div>
                          <div className="text-[.6rem] min-[375px]:text-[.8rem] sm:text-[.4rem] md:text-[.6rem] lg:text-[.6rem] flex items-center">
                            <img
                              className="h-[.6rem] min-[375px]:h-[.7rem] lg:h-[.7rem] lg:mt-[2px]"
                              src={icon}
                              alt="icon"
                            />
                            <p>{item.years}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <Dialog
              open={!!zoomImg}
              onClose={() => setZoomImg(null)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white rounded-lg overflow-hidden max-w-3xl">
                  <img src={zoomImg} alt="zoom" className="w-full h-auto" />
                  <button
                    onClick={() => setZoomImg(null)}
                    className="absolute top-2 right-2 text-xl text-white py-2 px-4 rounded-full"
                  >
                    ✕
                  </button>
                </Dialog.Panel>
              </div>
            </Dialog>
        </div>
        <div className="flex justify-end mt-12 lg:mt-7 mr-[.8rem] lg:mr-[7.8rem]">
          <Link to="/">
            <span className="flex items-center text-[.8rem] text-white">
              <p>Browse All</p>
              <MdKeyboardArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
