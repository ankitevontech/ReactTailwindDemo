import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center">
        <div className="text-xl md:text-[35px] font-bold md:p-[24px]  ">
          Learn With Us
        </div>
        <h2 className="text-white font-bold text-3xl md:text-[70px] md:p-[24px] ">
          Grow With Us
        </h2>
        <div className="text-xl md:text-[35px]  font-bold text-white md:p-[24px]">
          Learn
          <Typed
            className="p-2"
            strings={[" Web Development", "Ethical Hacking"]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
        </div>
        <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
