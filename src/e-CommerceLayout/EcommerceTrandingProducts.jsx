import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "../swipper.css";
import StarReview from "../components/Reviewsection/StarReview";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AuthContext from "../context/AuthContext";

function EcommerceTrandingProducts() {
  const { products } = useContext(AuthContext);
  const eCommerceTrandingProducts = products.filter(
    (item) => item.category === "fragrances"
  );
  const finalItems =
    eCommerceTrandingProducts.length <= 4
      ? [...eCommerceTrandingProducts, ...eCommerceTrandingProducts]
      : eCommerceTrandingProducts;
  return (
    <div className="py-6 lg:py-10">
      <div className="px-10 sm:px-20 xl:px-28">
        <div className="flex justify-between text-center w-full">
          <div>
            <h1 className="tracking-tighter sm:tracking-normal text-[1rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold">
              Tranding Products
            </h1>
          </div>
          <div className="tracking-tighter sm:tracking-normal flex justify-end items-center text-xs md:text-sm lg:text-base sm:mr-8 font-semibold">
            <Link to="/">See All Shops</Link>
            <FiArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-[1.1rem]" />
          </div>
        </div>
        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              740: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
          >
            {finalItems.map((item, id) => (
              <SwiperSlide
                key={`${item.id || item.name}-${id}`}
                className="py-6 sm:py-8 lg:py-10 text-center font-semibold"
              >
                <div className="flex justify-center lg:gap-8 lg:px-0">
                  <div className="relative">
                    <Link
                      to={`/product/${item.category}/${item.id}`}
                      className="cursor-pointer"
                    >
                      <img
                        className="h-52 w-52 sm:h-72 sm:w-72 mb-4 object-cover"
                        src={item.images[0]}
                        alt={item.title}
                      />
                    </Link>
                    {item.badge && (
                      <div className="absolute top-3 left-3 px-[.6rem] py-[.2rem] bg-[#13ACF5] text-white rounded-full">
                        <p>{item.badge}</p>
                      </div>
                    )}
                    <label className="font-bold">{item.title}</label>
                    <span className="flex justify-center">
                      <StarReview stars={item.rating} reviews={item.reviews.length} />
                    </span>
                    <p className="flex justify-center items-center mt-1">
                      <FaDollarSign />
                      <span className="font-bold">{item.price}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default EcommerceTrandingProducts;
