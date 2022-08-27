import Image from "next/image";
import React from "react";

type Props = {};

const Img = (props: Props) => {
  return (
    <div>
      <span
        className="reflect overflow-visible"
        style={{ zIndex: "6" }}
        // onClick={() => setImgRollAnimation(!imgRollAnimation)}
      >
        {/* <img
                    src="/fantomUniverse.png"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer"
                  /> */}
        <Image
          src="/fantomUniverse.png"
          alt=""
          objectFit="cover"
          width={48}
          height={48}
          layout="fixed"
          className="object-cover rounded-full  shadow-whiteArrow hover:shadow-pinkArrow transition-all hover:scale-125 cursor-pointer overflow-visible"
        />
      </span>
    </div>
  );
};

export default Img;
