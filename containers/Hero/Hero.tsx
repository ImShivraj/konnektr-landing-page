import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { social } from "../../assets/lottie";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsFillCircleFill } from "react-icons/bs";

const Hero = () => {
  const [imgRollAnimation, setImgRollAnimation] = useState(true);

  // Getting a reference to the animation container.
  let animationContainer = useRef(null);
  let animationContainerSmall = useRef(null);
  const anim = useRef(null);
  const animSmall = useRef(null)

  // loading the animation once the component is mounted using useEffect.
  useEffect(() => {
    if (window.innerWidth >= 600 && animationContainer.current) {
      //@ts-ignore
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: social,
      });

      //@ts-ignore
      return () => anim.current?.destroy();
    } else if (animationContainerSmall.current) {
      //@ts-ignore
      animSmall.current = Lottie.loadAnimation({
        container: animationContainerSmall.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: social,
      });

      //@ts-ignore
      return () => animSmall.current?.destroy();
    }
  }, []);

  return (
    <div className="relative" id="hero" style={{ minHeight: "77.5vh" }}>
      <div className="lg1300:mt-28 grid grid-cols-2 lg1300:gap-0 gap-10 lg:px-0 xl6:pr-40">
        <motion.div
          className="text-center lg1300:text-start lg1300:col-span-1 col-span-2 lg1300:pl-14 xl2:pl-40 sm600:flex flex-col lg1300:gap-0 gap-2 px-2 lg1300:order-1 order-2 relative lg1300:bottom-0 bottom-8 hidden z-10"
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 1.5, ease: "backOut" }}
        >
          <h1
            className={`text-white md1:text-5xl sm400:text-3xl text-2xl font-bold md1:leading-snug font__kaushan tracking-wider gradient-text-logo`}
          >
            Network And Find Valuable Web 3.0 Connections
          </h1>
          <p className="text-gray-400 font__harmattan italic md1:mt-10 mt-5 md1:text-2xl text-lg font-semibold lg1300:pr-7 tracking-wider leading-relaxed">
            {
              "Konnektr is a web3 platform which lets you find connections and grow your network easily and effectively while you earn crypto alongside it."
            }
          </p>
          <div className="flex items-center gap-10 justify-center lg1300:justify-start sm600:my-12 my-10">
            <a
              href="https://tally.so/r/3ja5j4"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium tracking-widest  button-gradient-1 landing-review2-reverse px-4 py-3 rounded flex items-center gap-2 w-fit hover:scale-105 transition-all"
              type="button"
            >
              <span className="text-base font-medium font__kaushan tracking-widest">
                Join Waitlist
                {/* Start connecting */}
              </span>
              <HiOutlineArrowNarrowRight size={15} color="white" />
            </a>
            <button
              className="text-white font-medium tracking-widest landing-review2-reverse px-4 py-3 rounded hover:shadow-whity border flex items-center gap-2 w-fit hover:scale-105 transition-all"
              type="button"
            >
              <a
                href="https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b"
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold font__kaushan tracking-widest"
              >
                Learn more
              </a>
            </button>
          </div>
          <div className="flex items-center justify-center lg1300:justify-start">
            <div className="flex items-center sm600:flex-row flex-col sm600:gap-0 gap-10">
              <div className="flex relative sm600:left-0 left-10">
                <span
                  className="reflect"
                  style={{ zIndex: "6" }}
                  onClick={() => setImgRollAnimation(!imgRollAnimation)}
                >
                  <img
                    src="fantomUniverse.png"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer"
                  />
                </span>
                <motion.span
                  className="relative reflect"
                  style={{ zIndex: "5" }}
                  whileInView={
                    imgRollAnimation
                      ? { right: [47.5, 15] }
                      : { right: [15, 47.5] }
                  }
                  transition={{ duration: 0.75, ease: "backOut", delay: 0.25 }}
                >
                  <img
                    src="buildSpace.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer"
                  />
                </motion.span>
                <motion.span
                  className="relative reflect"
                  style={{ zIndex: "4" }}
                  whileInView={
                    imgRollAnimation ? { right: [95, 30] } : { right: [30, 95] }
                  }
                  transition={{ duration: 0.75, ease: "backOut", delay: 0.25 }}
                >
                  <img
                    src="marketingMetaverse.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer"
                  />
                </motion.span>
                <motion.span
                  className="relative reflect"
                  style={{ zIndex: "2" }}
                  whileInView={
                    imgRollAnimation
                      ? { right: [143, 45] }
                      : { right: [45, 143] }
                  }
                  transition={{ duration: 0.75, ease: "backOut", delay: 0.25 }}
                >
                  <img
                    src="learnWeb3Dao.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer "
                  />
                </motion.span>
                <motion.span
                  className="relative reflect"
                  style={{ zIndex: "1" }}
                  whileInView={
                    imgRollAnimation
                      ? { right: [190, 60] }
                      : { right: [60, 190] }
                  }
                  transition={{ duration: 0.75, ease: "backOut", delay: 0.25 }}
                >
                  <img
                    src="productHouse.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer "
                  />
                </motion.span>
                <motion.span
                  className="relative reflect"
                  style={{ zIndex: "0" }}
                  whileInView={
                    imgRollAnimation
                      ? { right: [240, 75] }
                      : { right: [75, 240] }
                  }
                  transition={{ duration: 0.75, ease: "backOut", delay: 0.25 }}
                >
                  <img
                    src="web3Learn.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer "
                  />
                </motion.span>
              </div>
              <div className="relative sm600:left-0 left-10">
                <motion.div
                  className="flex items-center gap-3 relative"
                  whileInView={
                    imgRollAnimation
                      ? { right: [225, 40], opacity: [0.5, 1] }
                      : { right: [40, 225], opacity: [0.5, 1] }
                  }
                  transition={{ duration: 0.75, ease: "backOut", delay: 0.25 }}
                >
                  <BsFillCircleFill size={12.5} color="white" />
                  <span className="font__kaushan font-semibold tracking-wider text-md">
                    {/* Join 45,000+ people globally */}
                    Join your favorite Web3 communities
                    {/* Join the Web3 revolution */}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Smaller Devices  */}
        <div className="text-center col-span-2 flex flex-col gap-2 px-2 order-2 relative sm600:hidden z-10">
          <h1
            className={`text-white md1:text-5xl sm400:text-3xl text-2xl font-bold md1:leading-snug font__kaushan tracking-wider gradient-text-logo`}
          >
            Network And Find Valuable Web 3.0 Connections
          </h1>
          <p className="text-gray-400 font__harmattan mt-5 text-lg font-semibold font__harmattan italic tracking-wider leading-relaxed">
            {
              "Konnektr is a web3 platform which lets you find connections and grow your network easily and effectively while you earn crypto alongside it."
            }
          </p>
          <div className="flex items-center gap-10 justify-center my-10">
            <a
              href="https://tally.so/r/3ja5j4"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium tracking-widest button-gradient-1 landing-review2-reverse px-4 py-3 rounded shadow flex items-center gap-2 w-fit"
              type="button"
            >
              <span className="text-base font-semibold font__kaushan tracking-widest">
                Join Waitlist
                {/* Start connecting */}
              </span>
              <HiOutlineArrowNarrowRight size={15} color="white" />
            </a>
            <button
              className="text-white font-medium tracking-widest landing-review2-reverse px-4 py-3 rounded border flex items-center gap-2 w-fit"
              type="button"
            >
              <a
                href="https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b"
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold font__kaushan tracking-widest"
              >
                Learn more
              </a>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center flex-col gap-10">
              <div className="flex relative left-10">
                <span className="reflect" style={{ zIndex: "6" }}>
                  <img
                    src="fantomUniverse.png"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full shadow-whiteArrow"
                  />
                </span>
                <span
                  className="relative reflect"
                  style={{ zIndex: "5", right: "15px" }}
                >
                  <img
                    src="buildSpace.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full shadow-whiteArrow"
                  />
                </span>
                <span
                  className="relative reflect"
                  style={{ zIndex: "4", right: "30px" }}
                >
                  <img
                    src="marketingMetaverse.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full shadow-whiteArrow"
                  />
                </span>
                <span
                  className="relative reflect"
                  style={{ zIndex: "2", right: "45px" }}
                >
                  <img
                    src="learnWeb3Dao.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full shadow-whiteArrow"
                  />
                </span>
                <span
                  className="relative reflect"
                  style={{ zIndex: "1", right: "60px" }}
                >
                  <img
                    src="productHouse.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow"
                  />
                </span>
                <span
                  className="relative reflect"
                  style={{ zIndex: "0", right: "75px" }}
                >
                  <img
                    src="web3Learn.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow"
                  />
                </span>
              </div>
              <div className="relative sm600:left-0 left-10">
                <div className="flex items-center gap-3 relative right-10">
                  <BsFillCircleFill
                    size={12.5}
                    color="white"
                    className="sm600:block hidden"
                  />
                  <span className="font__kaushan font-semibold tracking-wider text-md">
                    {/* Join 45,000+ people globally */}
                    Join your favorite Web3 communities
                    {/* Join the Web3 revolution */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="lg1300:col-span-1 col-span-2 relative lg1300:bottom-32 bottom-8 sm600:px-20 lg1300:p-0 xl2:px-20 lg1300:order-2 order-1 lg1300:h-fit h-20-rem hidden sm600:block z-10"
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1.5, ease: "backOut" }}
        >
          <div ref={animationContainer} className="h-full" />
        </motion.div>
        {/* Smaller Devices  */}
        <div className="col-span-2 max-h-52 order-1 block sm600:hidden z-10">
          <div
            ref={animationContainerSmall}
            className="h-60 relative bottom-5"
          />
        </div>
      </div>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bubble_blur" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 right-0 bubble_blur" />
    </div>
  );
};

export default Hero;
