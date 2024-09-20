import waterBottle from "../assets/bottle-wave.png";
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
              Sky Splash !! Healthy Water !! Pure Water !!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sky Splash !! Healthy Water !! Pure
              Water
            </h1>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex  lg:flex-row mt-6 relative items-center">
          {/* Image Section */}
          <img
            src={waterBottle}
            alt="Water Bottle"
            className="absolute z-10 w-[25rem]  hidden lg:block h-[12rem] sm:h-[18rem] md:h-[22rem] lg:h-[35rem]  sm:right-[4rem] md:right-[21.3rem] lg:right[12rem] xl:right-[31.3rem] top-[10rem]"
          />

          {/* Left Content */}
          <div className="w-full lg:w-[50%] bg-white rounded-tr-[5rem] lg:rounded-tr-[10rem] p-6 md:p-8 h-[80rem] lg:h-[50rem]">
            <ul className="flex flex-col gap-6 w-[80%]">
              <li className="flex items-start gap-4">
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <FaHandHoldingWater className="text-blue-500" size={30} />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Maximum Purity</h1>
                  <p className="max-w-xs opacity-50">
                    At Splash, we are committed to delivering the highest level
                    of purity in every bottle. Our water goes through an
                    advanced purification process that removes all contaminants,
                    ensuring you receive only the cleanest, safest drinking
                    water. We prioritize your health and well-being by adhering
                    to stringent quality standards, so you can trust every drop
                    of Splash.
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
                    We believe that your drinking water should be free from
                    harmful chemicals, which is why Splash is 100%
                    chlorine-free. Unlike tap water, which often contains
                    chlorine, our water undergoes thorough purification to
                    eliminate this and other unwanted substances, offering you a
                    healthier, safer alternative.
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
                    Our water is subjected to a comprehensive multi-step
                    filtration process to ensure superior quality. This system
                    is designed to effectively remove impurities while retaining
                    essential minerals that are beneficial to your health. The
                    result is crisp, refreshing, and pure drinking water that
                    you can trust for everyday hydration.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[50%] bg-white rounded-tl-[5rem] lg:rounded-tl-[10rem] p-6 md:p-8 flex justify-end items-start h-[80rem] lg:h-[50rem]">
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
                  <h1 className="font-bold text-lg">
                    Rich in Essential Minerals
                  </h1>
                  <p className="max-w-xs opacity-50">
                    Splash water not only quenches your thirst but also
                    replenishes your body with essential minerals like calcium
                    and magnesium. Our carefully balanced mineral content
                    ensures that every sip supports your overall health, making
                    Splash not just refreshing, but beneficial for your body’s
                    hydration and nourishment needs.
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
                  <h1 className="font-bold text-lg">
                    Strict Quality Assurance
                  </h1>
                  <p className="max-w-xs opacity-50">
                    At Splash, we take quality seriously. Every batch of water
                    is rigorously tested in our state-of-the-art facilities to
                    ensure it meets the highest standards of safety and purity.
                    From sourcing to bottling, we follow stringent quality
                    control protocols to deliver the finest packaged drinking
                    water.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 justify-end mt-10">
                <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12">
                  <GiWaterRecycling className="text-blue-500" size={30} />
                </div>
                <div className="text-right ">
                  <h1 className="font-bold text-lg">Eco-Friendly Packaging</h1>
                  <p className="max-w-xs opacity-50">
                    Our commitment to sustainability is reflected in Splash’s
                    eco-friendly packaging. We use recyclable materials to
                    reduce our environmental footprint, so you can enjoy our
                    premium water with peace of mind, knowing you’re making a
                    greener choice for the planet.
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
