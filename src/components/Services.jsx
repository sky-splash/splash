import servicesData from "../assets/servicesData";
import Card from "./Card";

const Services = () => {
  return (
    <div className="bg-[#eaf1f6] flex flex-col items-center gap-6 pb-16">
      <button className="bg-white rounded-xl text-[#674eb2] px-4 py-1 mt-6">
        OUR PRODUCTS
      </button>
      <h2 className="text-[3rem] text-center font-montserrat">
        Our Range of Bottle Sizes
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((service, index) => {
          return <Card service={service} key={index} index={index}></Card>;
        })}
      </div>
    </div>
  );
};

export default Services;
