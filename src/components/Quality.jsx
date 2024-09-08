import { FaPhone } from "react-icons/fa";
import waterBottle from "../assets/waterBottle.png";

const Quality = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-10 lg:px-20 py-10 bg-[#eaf1f6] gap-10 lg:gap-0">
      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          src={waterBottle}
          alt="Water Bottle"
          className="w-[80%] l lg:w-[300px] l" // Adjust the size for large screens
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[50%] flex flex-col gap-10">
        <div className="flex flex-col gap-6 px-4 md:px-10">
          <button className="bg-white w-[10rem] md:w-[12rem] p-3 rounded-full font-montserrat font-semibold">
            ABOUT US
          </button>
          <h2 className="font-montserrat text-3xl md:text-4xl">
            We Provide Quality Water Delivery
          </h2>
          <p className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
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

        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row px-4 md:px-10 gap-6 lg:gap-x-5 items-center">
          <button className="bg-blue-500 w-[10rem] md:w-[12rem] p-3 rounded-full font-montserrat font-semibold text-white">
            Read More
          </button>
          <div className="flex items-center space-x-4 md:space-x-6">
            <FaPhone className="text-2xl md:text-3xl" />
            <h1 className="text-lg md:text-xl">+99123456293</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
