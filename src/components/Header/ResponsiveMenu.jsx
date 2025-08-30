import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { menuLinks } from "../../context/Index";
import { Link } from "react-router-dom";

function ResponsiveMenu({ isOpen }) {
  return <AnimatePresence mode="wait">
    {
        isOpen && (
            <motion.div
            initail={{ opacity: 0, y:-100 }}
            animate={{ opacity: 1, y: 0 }}
            exit= {{ opacity: 0 }}
            className="fixed top-20 left-0 size-full z-20 bg-transparent blur-lg"
            >
                <div className="text-black font-semibold text-xl py-10 mx-6 rounded-3xl">
                    {menuLinks.map((item, index)=>(
                         <div
                         key={index}
                         className="flex flex-col justify-center items-center gap-10"
                       >
                         <Link
                           to={item.to}
                           className="px-1 sm:px-2 lg:px-5 py-1 hover:bg-gray-200 hover:text-primary rounded-full"
                         >
                           {item.label}
                         </Link>
                       </div>
                    ))}
                </div>
            </motion.div>
        )
    }
  </AnimatePresence>
}

export default ResponsiveMenu;
