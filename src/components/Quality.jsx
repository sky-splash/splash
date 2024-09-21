import { FaPhone } from "react-icons/fa";
import waterBottle from "../assets/bottle-.png";

const Quality = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-10 lg:px-20 py-10 bg-[#eaf1f6] gap-10 lg:gap-0">
      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          src={waterBottle}
          alt="Water Bottle"
          className="w-[5rem] l lg:w-[10rem] l h-[17rem] lg:h-[30rem]" // Adjust the size for large screens
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[50%] flex flex-col gap-10">
        <div className="flex flex-col gap-6 px-4 md:px-10">
          <div className="w-full flex justify-center">
            <button className="bg-white w-[10rem] md:w-[12rem] p-3 rounded-full font-montserrat font-semibold">
              ABOUT US
            </button>
          </div>
          <h2 className="font-montserrat text-3xl md:text-4xl text-center">
            We Provide Quality Water
          </h2>
          <p className="opacity-50 text-center md:text-start">
            Welcome to Splash, where we provide pure, refreshing, and
            mineral-rich drinking water to keep you hydrated and healthy. Our
            water goes through a rigorous purification process, ensuring every
            drop is safe, clean, and enriched with essential minerals. We take
            pride in offering high-quality water that meets international safety
            standards, giving you a healthy and refreshing experience with every
            sip.
          </p>
          <p className="opacity-50 mt-5 text-center md:text-start">
            At Splash, we are committed to both your well-being and the
            environment. Our eco-friendly packaging ensures that you can enjoy
            premium mineral water while contributing to a more sustainable
            future. Whether you&apos;re at home, at work, or on the go, Splash
            delivers trusted hydration, every time.
          </p>
        </div>
        <div className="w-full h-[0.1rem] opacity-20 bg-black "></div>

        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row px-4 md:px-10 gap-6 lg:gap-x-5 items-center">
          <button
            className="bg-blue-500 w-[10rem] md:w-[12rem] p-3 rounded-full font-montserrat font-semibold text-white"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=9761154541&text=I%20want%20to%20become%20a%20dealer.",
                "_blank",
                "noopener noreferrer"
              )
            }>
            Enquire Now
          </button>
          <div className="flex items-center space-x-4 md:space-x-6">
            <FaPhone className="text-2xl md:text-3xl rotate-90" />
            <h1 className="text-lg md:text-xl">+91-9761154541</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
