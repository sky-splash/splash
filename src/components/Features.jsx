import waterBottle from "../assets/waterBottle.png";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiWaterRecycling } from "react-icons/gi";

const Features = () => {
  return (
    <div className="px-4 sm:px- lg:px-[3rem] py-10 hidden md:block">
      <div className="flex flex-col bg-blue-950 pt-2 rounded-[2rem]">
        {/* Marquee Section */}
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <h1 className="inline-block text-white text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold opacity-50">
              Healthy Water !! Pure Water !! Healthy Water !! Pure Water !!
            </h1>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex  lg:flex-row mt-6 relative items-center">
          {/* Image Section */}
          <img
            src={waterBottle}
            alt="Water Bottle"
            className="absolute z-10 h-[12rem] sm:h-[18rem] md:h-[22rem] lg:h-[26rem] right-0 sm:right-0 md:right-[21.3rem] lg:right[12rem] xl:right-[34.3rem]"
          />

          {/* Left Content */}
          <div className="w-full lg:w-[50%] bg-white rounded-tr-[5rem] lg:rounded-tr-[10rem] p-6 md:p-8">
            <ul className="flex flex-col gap-6 w-[80%]">
              <li className="flex items-start gap-4">
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <FaHandHoldingWater className="text-blue-500" size={30} />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Maximum Purity</h1>
                  <p className="max-w-xs opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi reiciendis esse deserunt beatae officiis ab optio
                    magni eaque consectetur nulla!
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <FaBottleWater className="text-blue-500" size={30} />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Chlorine Free</h1>
                  <p className="max-w-xs opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi reiciendis esse deserunt beatae officiis ab optio
                    magni eaque consectetur nulla!
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <GiWaterRecycling className="text-blue-500" size={30} />
                </div>
                <div>
                  <h1 className="font-bold text-lg">% Step Filtration</h1>
                  <p className="max-w-xs opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi reiciendis esse deserunt beatae officiis ab optio
                    magni eaque consectetur nulla!
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[50%] bg-white rounded-tl-[5rem] lg:rounded-tl-[10rem] p-6 md:p-8 flex justify-end items-end">
            <ul className="flex flex-col gap-6 w-[80%] ml-auto">
              {" "}
              {/* ml-auto moves the content to the right */}
              <li className="flex items-start gap-4 justify-end">
                {" "}
                {/* justify-end to align icons and text to the right */}
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <FaHandHoldingWater className="text-blue-500" size={30} />
                </div>
                <div className="text-right">
                  {" "}
                  {/* text-right to align text to the right */}
                  <h1 className="font-bold text-lg">Maximum Purity</h1>
                  <p className="max-w-xs opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi reiciendis esse deserunt beatae officiis ab optio
                    magni eaque consectetur nulla!
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 justify-end">
                {" "}
                {/* same structure for right alignment */}
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <FaBottleWater className="text-blue-500" size={30} />
                </div>
                <div className="text-right">
                  <h1 className="font-bold text-lg">Chlorine Free</h1>
                  <p className="max-w-xs opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi reiciendis esse deserunt beatae officiis ab optio
                    magni eaque consectetur nulla!
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 justify-end">
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <GiWaterRecycling className="text-blue-500" size={30} />
                </div>
                <div className="text-right">
                  <h1 className="font-bold text-lg">% Step Filtration</h1>
                  <p className="max-w-xs opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi reiciendis esse deserunt beatae officiis ab optio
                    magni eaque consectetur nulla!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
