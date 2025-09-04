import TrandingProductsHeader from "../components/TrandingProducts/TrandingProductsHeader";
// import { mockData } from "../context/Index";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
// import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../swipper.css";
import StarReview from "../components/Reviewsection/StarReview";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function TrandingProducts() {
  const { products } = useContext(AuthContext);

  // const breakpoints = {
  //   640: { slidesPerView: 1 },
  //   768: { slidesPerView: 2 },
  //   1024: { slidesPerView: 3 },
  //   1280: { slidesPerView: 4 },
  // };
  const trendingProducts = products.filter(
    (item) => item.category === "beauty"
  );
  return (
    <div className="py-6 lg:py-10">
      <section className="px-4 sm:px-16 lg:px-10 bg-gradient-to-t from-[#FFFFFF] to-[#F4F6FB]">
        <div className="flex justify-center text-center w-full px-4 sm:px-16 lg:px-0 min-[1440px]:py-8">
          <TrandingProductsHeader />
        </div>
        <div className="flex flex-row overflow-hidden">
          {trendingProducts.map(
            (item, index) =>
              index <= 4 && (
                <div
                  key={`${item.id || item.name}`}
                  className="flex-shrink-0 py-6 lg:py-10 text-center font-semibold w-1/2 min-[425px]:w-1/3 lg:w-1/4"
                >
                  <div className="flex justify-center lg:mx-4">
                    <div className="relative">
                      <Link
                        to={`/product/${item.category}/${item.id}`}
                        className="cursor-pointer"
                      >
                        <img
                          className="h-32 w-32 min-[425px]:h-36 min-[425px]:w-36 lg:h-52 lg:w-52 xl:h-72 xl:w-72 mb-4 object-cover"
                          src={item.images[0]}
                          alt={item.title}
                        />
                      </Link>

                      {item.badge && (
                        <div className="absolute top-1 left-1 lg:top-3 lg:left-3 text-[.5rem] md:text-sm min-[2560px]:text-2xl px-1 lg:px-[.6rem] lg:py-[.2rem] bg-[#13ACF5] text-white rounded-full">
                          <p>{item.badge}</p>
                        </div>
                      )}
                      <label className="text-[.8rem] lg:text-lg xl:text-xl min-[2560px]:text-3xl font-bold w-20">
                        {item.title}
                      </label>

                      <span className="flex justify-center text-[.5rem] md:text-lg lg:text-xl min-[2560px]:text-2xl">
                        <StarReview
                          stars={item.rating}
                          reviews={item.reviews?.length}
                        />
                      </span>
                      <p className="flex justify-center items-center mt-1 text-sm md:text-md xl:text-lg min-[2560px]:text-3xl">
                        <FaDollarSign />
                        <span className="font-bold">{item.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
      <div className="flex justify-end text-[.5rem] md:text-lg lg:text-xl min-[2560px]:text-2xl items-center mr-8 text-primary font-semibold">
        <Link to="/">Browse All</Link>
        <IoIosArrowForward className="w-5 h-4" />
      </div>
    </div>
  );
}

export default TrandingProducts;
