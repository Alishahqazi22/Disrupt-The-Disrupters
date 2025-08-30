import React from 'react'
import { footerSocialLinks } from '../../context/Index'
import { Link } from 'react-router-dom'

function UpperFooter() {
  return (
    <div className="w-[100%] h-[3rem] lg:h-[4rem] bg-[#0F0F0F] text-center">
      <div className="flex justify-between items-center h-full gap-2 sm:px-10 lg:px-16 xl:px-32">
        <div>
          <p className="text-white text-[.5rem] min-[375px]:text-[.6rem] lg:text-[.85rem]">
            ©Copyright 2025{" "}
            <Link to="/">
              <span className="text-[#00A9DA]">
              The Corps{" "}
              </span>
            </Link>
            All Rights Reserved.
          </p>
        </div>
        <div className="flex h-full gap-2 ">
          {footerSocialLinks.map((item, index) => (
            <div key={index} className="h-full flex items-center">
              <Link to={item.link}>
                <div className="flex items-center justify-center w-5 h-5 min-[375px]:h-7 min-[375px]:w-7 lg:h-10 lg:w-10 rounded-full bg-[#00A9DA]">
                  <img src={item.icon} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpperFooter