import React from "react";
import { FaPhone } from "react-icons/fa";
import waterBottle from "../assets/waterBottle.png";

const Quality = () => {
  return (
    <div className="flex px-20 py-10 bg-[#eaf1f6]">
      <div className="w-[50%] flex justify-center">
        <img src={waterBottle} alt="" />
      </div>
      <div className="w-[50%] flex flex-col gap-6">
        <div className="flex flex-col gap-6 px-10">
          <button className="bg-white w-[12rem] p-3 rounded-full font-montserrat font-semibold">
            ABOUT US
          </button>
          <h2 className="font-montserrat text-4xl ">
            We Provide Quality Water Delivery
          </h2>
          <p className="opacity-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            perferendis molestiae reprehenderit veritatis officia perspiciatis.
            Debitis consectetur provident laboriosam, labore repellat sit quam
            officia est facilis et ipsa magni optio.
          </p>
          <p className="opacity-50 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            excepturi dignissimos iure, quia minima fugiat. Libero ipsa eius
            quod possimus qui rem perspiciatis nesciunt quaerat, mollitia
            reprehenderit nisi velit blanditiis!
          </p>
        </div>
        <div className="w-full h-[0.1rem] opacity-20 bg-black "></div>
        <div className=" flex px-10 gap-x-5">
          <button className="bg-blue-500 w-[12rem] p-3 rounded-full font-montserrat font-semibold text-white">
            Read More
          </button>
          <div className="flex items-center space-x-6">
            <FaPhone className="text-3xl" />
            <h1>+99123456293</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
