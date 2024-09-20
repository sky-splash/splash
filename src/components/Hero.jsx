import bg from "../assets/hero-image.jpg";
import bottle3 from "../assets/Designer.png";
import ice1 from "../assets/ice1.png";
import ice2 from "../assets/ice2.png";
import ice3 from "../assets/ice3.png";
import ice4 from "../assets/ice4.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex flex-col lg:flex-row w-full h-full px-5 lg:px-7">
        {/* Left Half */}
        <div className="flex items-center justify-center lg:w-1/2 w-full lg:pl-16">
          <div className=" items-center mt-20 lg:mt-0 lg:items-start flex flex-col justify-center lg:pl-20 text-center lg:text-left">
            <button className="bg-white px-4 py-2  lg:px-6 lg:py-1 w-[12rem] lg:w-[15rem] rounded-[6rem] font-bold text-[#0A75AD] mb-4 lg:mb-6">
              MINERAL COMPOSITION
            </button>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[5rem] font-bold leading-tight lg:leading-[7rem] mb-6">
              Pure & Healthy Drinking Water
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-4 lg:space-y-0">
              <button className="bg-blue-500 w-[12rem] p-3 rounded-full font-montserrat font-semibold text-white">
                More About Us
              </button>
              <button className="bg-white w-[12rem] p-3 rounded-full font-montserrat font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex items-center justify-center w-full lg:w-1/2 relative px-8 lg:px-[6rem] xxl:px-[9rem] mt-8 lg:mt-0">
          <img
            src={bottle3}
            alt="Bottle"
            className="max-w-[70%] sm:max-w-[50%] lg:max-w-full h-auto relative z-10"
          />
          <img
            src={ice1}
            alt="Ice 1"
            className="absolute bottom-[4rem] sm:bottom-[5rem] lg:bottom-[6rem] xxl:bottom-[9rem] left-0 z-0 w-[30%] sm:w-[40%] lg:w-[40%] xxl:w-[100%]"
          />
          <img
            src={ice2}
            alt="Ice 2"
            className="absolute bottom-[3rem] sm:bottom-[4rem] lg:bottom-[5rem] xxl:bottom-[9rem] left-[5rem] sm:left-[7rem] lg:left-[9rem] xxl:left-[12rem] z-20 w-[15%] sm:w-[20%] lg:w-[20%] xxl:w-[100%]"
          />
          <img
            src={ice3}
            alt="Ice 3"
            className="absolute bottom-[3rem] sm:bottom-[4rem] lg:bottom-[5rem] xxl:bottom-[9rem] right-[4rem] sm:right-[6rem] lg:right-[8rem] xxl:right-[12rem] z-20 w-[15%] sm:w-[20%] lg:w-[20%] xxl:w-[100%]"
          />
          <img
            src={ice4}
            alt="Ice 4"
            className="absolute bottom-[4rem] sm:bottom-[5rem] lg:bottom-[6rem] xxl:bottom-[9rem] right-0 z-0 w-[30%] sm:w-[40%] lg:w-[40%] xxl:w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
