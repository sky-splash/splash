import bottle from "../assets/bottle-wave.png";

const Card = ({ service }) => {
  console.log(service.size);
  return (
    <div className="bg-white rounded-xl w-[20rem] h-[25rem] p-6 flex flex-col justify-center gap-8 items-center shadow-xl">
      <div
        className="flex justify-center bg-[#ffffff] aspect-[1/1] rounded-full relative border-black  shadow-2xl"
        style={{ width: `${service.size + 2}rem` }}>
        {/* Empty div for the circle */}
        <img
          src={bottle}
          alt=""
          className="absolute bottom-0 left-8"
          style={{ width: `${service.size - 1}rem` }}
        />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col">
          <h2 className="text-gray-500 text-[1.4rem] text-center">
            {service.name}
          </h2>
          <p className="font-montserrat ">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
