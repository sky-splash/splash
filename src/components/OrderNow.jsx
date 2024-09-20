import slider from "../assets/bannerr.jpg";
// import manWithBottle from "../assets/manWithBottle.png";

const OrderNow = () => {
  return (
    <div className="px-6 md:px-12 lg:px-[6rem] my-6">
      <div
        style={{ backgroundImage: `url(${slider})`, height: "400px" }}
        className="flex flex-col lg:flex-row rounded-xl bg-cover bg-center p-8 gap-6 lg:gap-0 h-[400px] md:h-[500px] lg:h-[600px] justify-end lg:justify-normal">
        {/* Text Section */}
        <div className="w-full lg:w-[50%]  flex-col justify-center items-center gap-4 text-center lg:text-left sm:mt-[20rem] lg:mt-0 hidden lg:flex">
          <h1 className="font-montserrat text-3xl md:text-4xl text-white">
            For DealerShip
          </h1>
          {/* <h1 className="font-montserrat text-3xl md:text-4xl text-white">
            We Deliver
          </h1> */}
          <a
            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white w-[14rem] md:w-[18rem] p-3 rounded-full font-montserrat font-semibold text-blue-500 text-center animate-flash">
            Enquire Now on Whatsapp
          </a>
        </div>

        {/* Image Section */}
        {/* <div className="w-full lg:w-[50%] flex justify-center items-center relative">
          <img
            src={manWithBottle}
            alt="Man with bottle"
            className="h-[250px] md:h-[350px] lg:h-full absolute bottom-[-32px] right-[-30px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default OrderNow;
