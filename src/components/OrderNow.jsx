import slider from "../assets/slider-bg.jpg";
import manWithBottle from "../assets/manWithBottle.png";

const OrderNow = () => {
  return (
    <div className="px-[6rem] my-6">
      <div
        style={{ backgroundImage: `url(${slider})` }}
        className="flex rounded-xl bg-cover bg-center">
        <div className="w-[50%] flex  flex-col justify-center items-center gap-4">
          <h1 className="font-montserrat text-4xl">You Order</h1>
          <h1 className="font-montserrat text-4xl">We Deliver</h1>
          <button className="bg-blue-500 w-[18rem] p-3 rounded-full font-montserrat font-semibold text-white">
            Order Now on Whatsapp
          </button>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={manWithBottle} alt="Man with bottle" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
