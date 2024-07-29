import bg from "../assets/hero-image.jpg";
import bottle3 from "../assets/bottel3.png";
import ice1 from "../assets/ice1.png";
import ice2 from "../assets/ice2.png";
import ice3 from "../assets/ice3.png";
import ice4 from "../assets/ice4.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex w-full h-full px-7">
        {/* Left Half */}
        <div className=" flex items-center  w-1/2  pl-16">
          <div className="flex flex-col justify-center pl-20">
            <button className=" bg-white px-6 py-1 w-[15rem] rounded-[6rem] font-bold text-[#0A75AD]">
              MINERAL COMPOSITION
            </button>
            <h1 className="text-[5rem] mb-4 font-bold leading-[7rem]">
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
        <div className="flex items-center justify-center w-1/2 relative px-[6rem] xxl:px-[9rem] ">
          <img
            src={bottle3}
            alt="Bottle"
            className="max-w-full h-auto relative z-10"
          />
          <img
            src={ice1}
            alt=""
            className="absolute  bottom-[6rem] xxl:bottom-[9rem] left-0 z-0 w-[40%] xxl:w-[100%]"
          />
          <img
            src={ice2}
            alt=""
            className="absolute bottom-[5rem] xxl:bottom-[9rem] left-[9rem] xxl:left-[12rem] z-20 w-[20%] xxl:w-[100%]"
          />
          <img
            src={ice3}
            alt=""
            className="absolute bottom-[5rem] xxl:bottom-[9rem] right-[8rem] sxxl:right-[12rsem] z-20 w-[20%] xxl:w-[100%]"
          />
          <img
            src={ice4}
            alt=""
            className="absolute bottom-[6rem] xxl:bottom-[9rem] right-0 z-0 w-[40%] xxl:w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
