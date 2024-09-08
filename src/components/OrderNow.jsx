import slider from "../assets/slider-bg.jpg";
import manWithBottle from "../assets/manWithBottle.png";

const OrderNow = () => {
  return (
    <div className="px-6 md:px-12 lg:px-[6rem] my-6">
      <div
        style={{ backgroundImage: `url(${slider})` }}
        className="flex flex-col lg:flex-row rounded-xl bg-cover bg-center p-8 gap-6 lg:gap-0">
        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center gap-4 text-center lg:text-left">
          <h1 className="font-montserrat text-3xl md:text-4xl">You Order</h1>
          <h1 className="font-montserrat text-3xl md:text-4xl">We Deliver</h1>
          <a
            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 w-[14rem] md:w-[18rem] p-3 rounded-full font-montserrat font-semibold text-white text-center">
            Order Now on Whatsapp
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <img
            src={manWithBottle}
            alt="Man with bottle"
            className="h-[250px] md:h-[350px] lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
