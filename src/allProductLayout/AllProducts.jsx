import React, { useContext, useRef, useState } from "react";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { LuCarFront } from "react-icons/lu";
import {
  FaDollarSign,
  FaHeart,
  FaMapMarkerAlt,
  FaShower,
} from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { toggleWishList } from "../store/WishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import StarReview from "../components/Reviewsection/StarReview";
import icon from "../assets/FeaturesAssets/PinIcon.png";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import AuthContext from "../context/AuthContext";

function AllProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const dispatch = useDispatch();
  const [hoverStyle, setHoverStyle] = useState(null);
  const navRefs = useRef([]);
  const { products } = useContext(AuthContext);

  const wishListItems = useSelector((state) => state.wishList.items);

  const categories = [...new Set(products.map((item) => item.category))];

  const types = selectedCategory
    ? Array.from(
        new Set(
          products
            .filter((item) => item.category === selectedCategory)
            .flatMap((item) =>
              Array.isArray(item.tags) ? item.tags : [item.tags]
            )
            .map((tag) => String(tag).toLowerCase().trim())
        )
      )
    : [];

  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      (item.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (item.category?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (item.For?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (Array.isArray(item.tags)
        ? item.tags.some((tag) =>
            String(tag).toLowerCase().includes(searchTerm.toLowerCase())
          )
        : String(item.tags || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;

    const matchesType = selectedType ? item.tags === selectedType : true;

    return matchesSearch && matchesCategory && matchesType;
  });

  const isInWishList = (id) => {
    return wishListItems.some((items) => items.id === id);
  };

  const handleHeartClick = (item) => {
    dispatch(toggleWishList(item));
  };

  const handleMouseEnter = (index) => {
    const el = navRefs.current[index];
    if (el) {
      const { left, width } = el.getBoundingClientRect();
      const parentLeft = el.parentElement.getBoundingClientRect().left;
      setHoverStyle({ left: left - parentLeft, width });
    }
  };

  const handleMouseLeave = () => {
    setHoverStyle(null);
  };

  return (
    <div>
      <div className="px-3 sm:px-4 md:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-3 mb-6 border-b py-4 bg-secondary">
        <div className="relative w-full md:w-auto">
          <select
            className="border px-3 py-2 rounded w-full md:w-auto text-sm sm:text-base cursor-pointer"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedType("");
            }}
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div onMouseLeave={handleMouseLeave} className="flex flex-wrap gap-2">
          {hoverStyle && (
            <div
              className="absolute border-b border-[#F4F4F4] z-0 transition-all duration-300 ease-in-out pointer-events-none"
              style={{
                width: `${hoverStyle.width}px`,
                height: "30px",
                transform: `translateX(${hoverStyle.left}px)`,
                opacity: hoverStyle ? 1 : 0,
              }}
            ></div>
          )}
          {types.map((t, index) => (
            <button
              key={index}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => setSelectedType(t)}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`px-3 py-1 text-sm sm:text-base uppercase hover:text-primary shadow ${
                selectedType === t ? "text-primary" : "text-white"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-40 hover:md:w-1/3 text-sm sm:text-base"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-3 sm:px-4 md:px-6">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((item) =>
            item.category === "property" ? (
              <div
                key={item.id}
                className="border rounded-t shadow-sm hover:shadow-md relative bg-white h-full flex flex-col"
              >
                <Link to={`/property/${item.id}`}>
                  <div className="relative w-full h-28 sm:h-32 md:h-36 lg:h-40">
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
                        1024: { slidesPerView: 4 },
                      }}
                    >
                      <img
                        className="h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover rounded-t"
                        src={item.image}
                        alt={item.title}
                      />
                    </Swiper>
                    <div className="absolute top-0 bg-gradient-to-t from-black/60 to-transparent rounded-t h-full w-full">
                      <div className="grid grid-cols-1 h-full pt-1 lg:pt-0 lg:p-1">
                        <div className="flex justify-between p-2 h-7 lg:h-9">
                          <div className="bg-[#77C720] text-white rounded-md">
                            <p className="uppercase text-[.35rem] sm:text-[.4rem] lg:text-[.6rem] px-1 py-[2px]">
                              Featured
                            </p>
                          </div>
                          <div className="bg-black/60 text-white rounded-md">
                            <p className="uppercase text-[.35rem] sm:text-[.4rem] lg:text-[.5rem] px-1 py-[3px]">
                              {item.For}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end items-end p-2">
                          {/* <div className="text-white text-[.4rem] sm:text-[.5rem] lg:text-[.75rem] font-medium">
                            <p>{item.amount}</p>
                            <p className="text-[.25rem] sm:text-[.33rem] lg:text-[.45rem]">
                              {item.EachSqfeet}
                            </p>
                          </div> */}
                          <button
                            className="bg-black/60 rounded-md p-1"
                            onClick={(e) => {
                              e.preventDefault();
                              handleHeartClick(item);
                            }}
                          >
                            {isInWishList(item.id) ? (
                              <FaHeart className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                              <CiHeart className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-b shadow-sm hover:shadow-md relative bg-white h-full flex flex-col">
                      <h3 className="font-semibold text-[.5rem] sm:text-[.9rem] md:text-sm mt-2 px-3 sm:px-4 md:px-6 ">
                        {item.title}
                      </h3>
                      <p className="flex gap-1 text-gray-500 text-[.5rem] sm:text-[.6rem] lg:text-xs w-[95%] px-3 sm:px-4 md:px-6 ">
                        <FaMapMarkerAlt className="mt-[.1rem]" />
                        {item.address}
                      </p>
                      <p className="flex items-center text-[.5rem] sm:text-[.8rem] lg:text-sm font-bold mt-1 px-3 sm:px-4 md:px-6 ">
                        <FaDollarSign /> {item.amount}
                      </p>
                      {/* property details */}
                      <div className="sm:pb-2 lg:pb-7">
                        <div className="flex items-center gap-2 lg:gap-3 py-[3px] lg:py-[4px]  px-3 sm:px-4 md:px-6 ">
                          <div className="flex items-center gap-[4px]">
                            <IoBedOutline className="w-[.6rem] h-[.6rem] sm:w-[.7rem] sm:h-[.7rem] lg:w-5 lg:h-5" />
                            <p className="text-[.5rem] sm:text-[.6rem] lg:text-xs font-medium mb-[1px]">
                              {item.bed}
                            </p>
                          </div>
                          <div className="flex items-center gap-[4px]">
                            <FaShower className="w-[.5rem] h-[.5rem] sm:w-[.6rem] sm:h-[.6rem] lg:w-5 lg:h-4" />
                            <p className="text-[.5rem] sm:text-[.6rem] lg:text-xs font-medium mb-[1px]">
                              {item.bath}
                            </p>
                          </div>
                          <div className="flex items-center gap-[4px]">
                            <LuCarFront className="w-[.6rem] h-[.6rem] sm:w-[.7rem] sm:h-[.7rem] lg:w-5 lg:h-5" />
                            <p className="text-[.5rem] sm:text-[.6rem] lg:text-xs font-medium mb-[1px]">
                              {item.parking}
                            </p>
                          </div>
                          <div className="flex items-center lg:gap-[4px]">
                            <TfiRulerAlt2 className="w-[.6rem] h-[.6rem] sm:w-[.7rem] sm:h-[.7rem] lg:w-[1rem] lg:h-[1rem] mb-[3px]" />
                            <span className="flex gap-1 text-[.3rem] sm:text-[.55rem] lg:text-[.7rem] font-medium mb-[1px] tracking-tighter">
                              {item.Sqfeet} Sq Ft
                            </span>
                          </div>
                        </div>
                        <p className="text-[.35rem] sm:text-[.45rem] lg:text-[.6rem] font-semibold uppercase px-3 sm:px-4 md:px-6 ">
                          {item.description}
                        </p>
                        <div className="bg-white border-t border-[#DCE0E0] text-[#636363] rounded-b">
                          <div className="flex items-center justify-between p-1 lg:p-3">
                            <div className="flex items-center gap-1 lg:gap-2">
                              <img
                                className="rounded-full h-[1.5rem]"
                                src={item.agentimage}
                                alt="agent"
                              />
                              <p className="text-[.35rem] sm:text-[.4rem] lg:text-[.65rem] font-semibold">
                                {item.agentName}
                              </p>
                            </div>
                            <div className="text-[.35rem] sm:text-[.4rem] lg:text-[.6rem] flex items-center">
                              <img
                                className="h-[.4rem] lg:h-[.6rem] lg:mt-[2px]"
                                src={icon}
                                alt="icon"
                              />
                              <p>{item.years}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <Link to={`/product/${item.category}/${item.id}`} key={item.id}>
                <div className="border rounded shadow-sm hover:shadow-md relative bg-white h-full flex flex-col">
                  <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-52">
                    <img
                      className="rounded-t w-full h-full object-cover"
                      src={
                        Array.isArray(item.images)
                          ? item.images[0]
                          : item.images || "/placeholder.jpg"
                      }
                      alt={item.title}
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        className="bg-black/60 rounded-md p-1"
                        onClick={(e) => {
                          e.preventDefault();
                          handleHeartClick(item);
                        }}
                      >
                        {isInWishList(item.id) ? (
                          <FaHeart className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <CiHeart className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 flex-1 flex flex-col text-center">
                    <h3 className="font-semibold text-sm sm:text-base line-clamp-1 mb-1">
                      {item.title}
                    </h3>
                    <span className="flex justify-center">
                      <StarReview
                        stars={item.rating || 0}
                        reviews={
                          Array.isArray(item.reviews) ? item.reviews.length : 0
                        }
                      />
                    </span>
                    {/* <p className="text-gray-600 text-xs sm:text-sm mb-1">
                      {item.tags}
                    </p> */}
                    <p className="font-bold text-sm sm:text-base">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </Link>
            )
          )
        ) : (
          <p className="col-span-full text-center">No products found</p>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
