import slider from "../assets/slider-bg.jpg";
import manWithBottle from "../assets/manWithBottle.png";

const OrderNow = () => {
  return (
    <div className="px-[6rem] my-6">
      <div
        style={{ backgroundImage: `url(${slider})` }}
        className="flex rounded-xl bg-cover bg-center">
        <div className="w-[50%] flex flex-col justify-center items-center gap-4">
          <h1 className="font-montserrat text-4xl">You Order</h1>
          <h1 className="font-montserrat text-4xl">We Deliver</h1>
          <a
            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 w-[18rem] p-3 rounded-full font-montserrat font-semibold text-white text-center">
            Order Now on Whatsapp
          </a>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={manWithBottle} alt="Man with bottle" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
