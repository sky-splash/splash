import React from "react";
import waterBottle from "../assets/waterBottle.png";

const Features = () => {
  return (
    <div>
      <div className="px-[12rem] py-10">
        <div className="flex flex-col bg-blue-950 pt-2 rounded-[3rem]">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <h1 className="inline-block text-white text-[3rem] font-bold opacity-50">
                Healthy Water !! Pure Water !! Healthy Water !! Pure Water !!
              </h1>
            </div>
          </div>
          <div className="flex mt-6 relative">
            <img
              src={waterBottle}
              alt=""
              className="absolute z-1 right-[27.9rem] h-[26rem]"
            />
            <div className="w-[50%] bg-white rounded-tr-[10rem] p-4 ">
              <ul className="flex flex-col gap-6">
                <li>
                  <h1>Maximum Purity</h1>
                </li>
                <li>
                  <h1>Chlorine Free</h1>
                </li>
                <li>
                  <h1>% step filtration</h1>
                </li>
              </ul>
            </div>
            <div className="w-[50%] bg-white rounded-tl-[10rem] p-4 flex justify-end">
              <ul className="flex flex-col gap-6">
                <li>
                  <h1>Maximum Purity</h1>
                </li>
                <li>
                  <h1>Chlorine Free</h1>
                </li>
                <li>
                  <h1>% step filtration</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
