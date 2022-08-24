import React from "react";

const Rewards = () => {
  return (
    <div className="grid grid-cols-4 gap-0 lg3:px-20 xl6:px-40" id="rewards">
      <div
        className="col-span-1 flex items-center justify-start h-44 bg-white bg-opacity-20 rounded-lg px-12 relative left-16"
        style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="flex flex-col gap-5">
          <p className="text-themeGreen1 font-semibold text-4xl">
            $17,040,343,38
          </p>
          <span className="text-2xl tracking-wider">Total Staking Assets</span>
        </div>
      </div>
      <div
        className="col-span-2 flex items-center justify-center h-44 bg-white bg-opacity-20 rounded-lg px-12"
        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%);" }}
      >
        <div className="flex flex-col gap-5">
          <p className="text-themeGreen1 font-semibold text-4xl">
            $17,040,343,38
          </p>
          <span className="text-2xl tracking-wider">Total Staking Assets</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Rewards;
