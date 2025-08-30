import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import Vector from "../../assets/socialIcons/Vector.svg";
import Navbar from "./Navbar";
import { NavItems } from "../../context/Index";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [showLaguageDropdown, setShowLaguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLaguageDropdown(false);
  };

  const changeCurrency = (cur) => {
    setSelectedCurrency(cur);
    setShowCurrencyDropdown(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="h-[3.4rem] bg-primary flex justify-between items-center text-white px-2 min-[375px]:px-6 md:px-12 lg:px-20 w-full">
        <div className="text-[.5rem] min-[375px]:text-[.8rem] sm:text-sm lg:text-base flex gap-1 lg:gap-4">
          <h3 className="mt-[2px] sm:mt-0">Follow us:</h3>
          {NavItems.map((item, index) => (
            <div key={index} className="mt-1">
              <NavLink to={item.link}>
                <div className="w-[.8rem] sm:w-[1.5rem] h-[1rem] lg:w-5 lg:h-5">
                  {item.icon}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="text-[.5rem] min-[375px]:text-[.6rem] lg:text-base flex gap-2  md:gap-4 lg:gap-7">
          <button className="flex items-center gap-2">
            <img
              src={Vector}
              alt="Icon"
              className="w-[.9rem] h-[.9rem] lg:w-5 lg:h-5"
            />
            <span>Track Order</span>
          </button>
          <div className="relative">
            <button
              onClick={() => {
                setShowLaguageDropdown(!showLaguageDropdown);
                setShowCurrencyDropdown(false); 
              }}
              className="flex items-center gap-2"
            >
              <span>{t("language")}</span>
              {!showLaguageDropdown ? (
                <RiArrowDownSLine className="transition-all duration-300" />
              ) : (
                <RiArrowDownSLine className="rotate-180 transition-all duration-300" />
              )}
            </button>

            {showLaguageDropdown && (
              <div className="absolute top-8 right-0 bg-white text-black shadow-md rounded-md w-32 z-20">
                <ul className="flex flex-col">
                  <li
                    onClick={() => changeLanguage("en")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    English
                  </li>
                  <li
                    onClick={() => changeLanguage("ur")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    اردو
                  </li>
                  <li
                    onClick={() => changeLanguage("ar")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    العربية
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setShowCurrencyDropdown(!showCurrencyDropdown);
                setShowLaguageDropdown(false); 
              }}
              className="flex items-center gap-2"
            >
              <span>{selectedCurrency}</span>
              {!showCurrencyDropdown ? (
                <RiArrowDownSLine className="transition-all duration-300" />
              ) : (
                <RiArrowDownSLine className="rotate-180 transition-all duration-300" />
              )}
            </button>

            {showCurrencyDropdown && (
              <div className="absolute top-8 right-0 bg-white text-black shadow-md rounded-md w-32 z-20">
                <ul className="flex flex-col">
                  <li
                    onClick={() => changeCurrency("USD")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    USD
                  </li>
                  <li
                    onClick={() => changeCurrency("PKR")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    PKR
                  </li>
                  <li
                    onClick={() => changeCurrency("INR")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    INR
                  </li>
                  <li
                    onClick={() => changeCurrency("EUR")}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    EUR
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </motion.nav>
  );
}

export default Header;
