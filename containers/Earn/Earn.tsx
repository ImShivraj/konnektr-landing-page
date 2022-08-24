import React from "react";
import { motion } from "framer-motion";
import { earnLinks } from "../../assets/links";

const Earn = () => {
  return (
    <div className="flex items-center flex-col sm:gap-14 gap-10 lg3:px-20 xl6:px-40 xl:mt-0 mt-20" id="earn">
      <h1 className="sm:text-4xl text-xl sm400:text-2xl font-bold tracking-wide font__kaushan">
        Earn Crypto For Being Awesome
      </h1>
      <motion.div
        className="sm600:grid hidden grid-cols-6 w-full"
        whileInView={{ scaleX: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.75, ease: "backOut" }}
      >
        {earnLinks.map((item) => (
          <div
            className="xl:col-span-1 sm:col-span-2 col-span-3 gap-5 flex flex-col xl:gap-2 items-center cursor-pointer sm600:hover:bg-white sm600:hover:bg-opacity-10 sm600:hover:backdrop-blur sm600:transition-all py-5 rounded sm600:hover:shadow-cardWhite sm600:hover:scale-110"
            key={item.label}
          >
            <i className={`fa ${item.iconClass} sm:text-6xl text-5xl`} />
            <p className="font-medium sm:text-md tracking-wider font-montserrat">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
      {/* Smaller Devices */}
      <div className="grid sm600:hidden grid-cols-6 w-full">
        {earnLinks.map((item) => (
          <div
            className=" xl:col-span-1 sm:col-span-2 col-span-3 gap-5 flex flex-col xl:gap-2 items-center cursor-pointer sm600:hover:bg-white sm600:hover:bg-opacity-10 sm600:hover:backdrop-blur sm600:transition-all py-5 rounded sm600:hover:shadow-cardWhite sm600:hover:scale-110"
            key={item.label}
          >
            <i className={`fa ${item.iconClass} sm:text-6xl text-5xl`} />
            <p className="font-medium sm:text-md tracking-wider font-montserrat">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earn;
