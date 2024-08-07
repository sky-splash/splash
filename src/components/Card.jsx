import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";

const images = [service1, service2, service3, service4];

const Card = ({ service, index }) => {
  return (
    <div className="bg-white rounded-xl w-[20rem] h-[20rem] p-6 flex flex-col justify-around">
      <div className="flex justify-between ">
        <img
          src={images[index]}
          alt={service.name}
          className="rounded-[30rem] w-[10rem]"
        />
        <h2 className="font-bold">{index + 1}</h2>
      </div>
      <div>
        <h2 className="text-gray-500">{service.name}</h2>
        <p className="font-montserrat text-[1.4rem]">{service.description}</p>
      </div>
    </div>
  );
};

export default Card;
