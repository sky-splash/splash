import React from "react";
import bg from "../assets/hero-image.jpg";
import bottle3 from "../assets/bottel3.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex w-full h-full">
        {/* Left Half */}
        <div className=" flex items-center  w-1/2  pl-16">
          <div className="flex flex-col justify-center pl-20">
            <button className="mb-1 bg-white p-4 w-[15rem] rounded-[6rem] font-bold text-[#0A75AD]">
              MINERAL COMPOSITION
            </button>
            <h1 className="text-[5rem] mb-4 font-bold font">
              Pure & Healthy Drinking Water
            </h1>
            <div className="flex space-x-5">
              <button className="bg-blue-500 w-[12rem] p-3 rounded-full font-montserrat font-semibold text-white">
                More About Us
              </button>
              <button className="bg-white w-[12rem] p-3 rounded-full font-montserrat font-semibold ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* Right Half */}
        <div className="flex items-center justify-center w-1/2">
          <img src={bottle3} alt="Bottle" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
