import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    title: "Happy Customer",
    text: "The water quality is exceptional! I never have to worry about impurities. The delivery service is prompt and reliable. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Satisfied Client",
    text: "This is the best water delivery service I've ever used. The water is always fresh, and the customer service is outstanding.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    title: "Regular User",
    text: "I love the convenience of ordering water through WhatsApp. The delivery is always on time, and the water tastes great!",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 md:px-12 py-10">
      <div className="bg-blue-950 text-white rounded-[3rem] p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-blue-950 p-6 rounded-lg shadow-md flex flex-col gap-4 w-full sm:w-[300px]">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm opacity-75">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-xl font-semibold mt-4">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
