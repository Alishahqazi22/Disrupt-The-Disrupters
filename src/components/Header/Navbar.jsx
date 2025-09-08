import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/HeaderIcons/Group 1.svg";
import SearchIcon from "../../assets/HeaderIcons/SearchIcon.svg";
import BagIcon from "../../assets/HeaderIcons/BagIcon.svg";
import UserIcon from "../../assets/HeaderIcons/UserIcon.svg";
import HeartIcon from "../../assets/HeaderIcons/HeartIcon.svg";
import { menuLinks } from "../../context/Index";
import { useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import AuthContext from "../../context/AuthContext";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [value, setvalue] = useState("");
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [hoverStyle, setHoverStyle] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const navRefs = useRef([]);
  const wishListItems = useSelector((state) => state.wishList.items);
  const wishListCount = wishListItems.length;

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
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-[3.5rem] sm:h-[5rem] lg:h-[6.5rem] flex justify-between px-4  sm:px-14 xl:px-10 items-center w-full shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <button
            className="lg:block xl:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>

          <NavLink to="/">
            <img
              className="h-[2.4rem] sm:h-[3.9rem] md:h-[5rem]"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </div>
        <div onMouseLeave={handleMouseLeave} className="hidden xl:flex">
          {hoverStyle && (
            <div
              className="absolute rounded-full bg-gray-200 z-0 transition-all duration-300 ease-in-out pointer-events-none"
              style={{
                width: `${hoverStyle.width}px`,
                height: "30px",
                transform: `translateX(${hoverStyle.left}px)`,
                opacity: hoverStyle ? 1 : 0,
              }}
            ></div>
          )}
          {menuLinks.map((item, index) => (
            <div
              key={index}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => setSelectedType(item)}
              onMouseEnter={() => handleMouseEnter(index)}
              className="text-black text-[.4rem] sm:text-sm xl:text-base font-semibold flex"
            >
              <Link
                to={item.to}
                className={`px-1 sm:px-2 lg:px-5 py-1 z-10 hover:text-primary rounded-full ${
                  selectedType === item ? "text-primary" : "text-black"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-3 sm:gap-4 lg:gap-5 h-4 items-center relative">
          <div
            onClick={() => setShowSearchBar(!showSearchBar)}
            className="cursor-pointer"
          >
            <img
              className="w-[.9rem] h-[1.4rem] sm:h-7 sm:w-7 lg:h-8 lg:w-8 mb-1"
              src={SearchIcon}
              alt="icon"
            />
          </div>
          <AnimatePresence>
            {showSearchBar && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                type="text"
                value={value}
                onChange={(e) => setvalue(e.target.value, console.log(value))}
                placeholder="Search"
                autoFocus
                className="absolute right-32 sm:right-[11.5rem] lg:right-[12.6rem] z-50 translate-y-0 my-auto  h-8 sm:h-10 rounded-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            )}
          </AnimatePresence>
          {user ? (
            <Link
              to="/userProfile"
              className="w-[.9rem] h-[.6rem] sm:h-5 sm:w-5 lg:h-6 lg:w-6 mb-3"
            >
              <img src={UserIcon} alt="icon" />
            </Link>
          ) : (
            <Link to="/signin">
              <button className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-md">
                Login
              </button>
            </Link>
          )}
          <div className="relative w-[1rem] h-[1.3rem] sm:w-6 sm:h-8 lg:w-7 lg:h-7 lg:mb-[2px]">
            <Link to="/favouritePage">
              <img src={HeartIcon} alt="icon" />
            </Link>
            {wishListCount > 0 && (
              <div className="absolute -top-[1px] lg:-top-[3px] left-[9px] sm:left-4 lg:left-5 rounded-full px-[4px] sm:px-[6px] text-[.5rem] sm:text-xs lg:text-sm bg-orange-400 text-white">
                {wishListCount}
              </div>
            )}
          </div>
          <div className="relative w-[.8rem] h-[.7rem] sm:w-5 sm:h-5 mb-[8px] lg:mb-[7px]">
            <Link to="/cartpage">
              <img src={BagIcon} alt="Cart" />
            </Link>
            {totalQuantity > 0 && (
              <div className="absolute -top-[1px] lg:-top-[3px] left-[.55rem] sm:left-[1rem] lg:left-[.8rem] rounded-full px-[4px] sm:px-[6px] text-[.5rem] sm:text-xs lg:text-sm bg-orange-400 text-white">
                {totalQuantity}
              </div>
            )}
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-64 bg-white shadow-lg z-40 p-4 lg:p-6"
          >
            <button
              className="text-2xl mb-6"
              onClick={() => setSidebarOpen(false)}
            >
              <FiX />
            </button>

            <div className="flex flex-col gap-4">
              {menuLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className="text-black text-xs sm:text-sm lg:text-base font-semibold hover:bg-gray-200 sm:px-4 py-2 rounded-lg"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
