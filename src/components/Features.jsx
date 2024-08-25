import waterBottle from "../assets/waterBottle.png";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiWaterRecycling } from "react-icons/gi";

const Features = () => {
  return (
    <div className="px-[12rem] py-10">
      <div className="flex flex-col bg-blue-950 pt-2 rounded-[3rem]">
        {/* Marquee Section */}
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <h1 className="inline-block text-white text-[3rem] font-bold opacity-50">
              Healthy Water !! Pure Water !! Healthy Water !! Pure Water !!
            </h1>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex mt-6 relative">
          {/* Image Section */}
          <img
            src={waterBottle}
            alt="Water Bottle"
            className="absolute z-1 right-[27.9rem] h-[26rem]"
          />

          {/* Left Content */}
          <div className="w-[50%] bg-white rounded-tr-[10rem] p-8">
            <ul className="flex flex-col gap-6">
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
          <div className="w-[50%] bg-white rounded-tl-[10rem] p-8 flex justify-end">
            <ul className="flex flex-col gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default Features;
