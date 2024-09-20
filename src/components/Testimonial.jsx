import { FaStar } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const testimonials = [
  {
    name: "Mannan Khan",
    title: "Happy Customer",
    text: `I’ve been using Splash for my family for the past few months, and I must say the quality is outstanding! The water tastes pure and refreshing, and I love that it’s chlorine-free. It’s now our go-to brand for clean drinking water, whether at home or on the go.`,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Ajay Kumar",
    title: "Happy Customer",
    text: `स्प्लैश का पानी सचमुच बहुत शुद्ध और ताज़ा है। इसका स्वाद इतना साफ़ है कि अब ये मेरी और मेरे परिवार की पहली पसंद बन गया है। हर बोतल में वही भरोसेमंद गुणवत्ता मिलती है।`,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Kashan ",
    title: "Satisfied Client",
    text: `Splash has really impressed me with its crisp, fresh taste. I love that it’s packed with essential minerals, and the eco-friendly packaging is a bonus! It’s my go-to water brand for both health and sustainability.`,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "shazen",
    title: "Regular User",
    text: ` The water tastes clean and pure, without any aftertaste, and the different bottle sizes are super convenient. It’s the perfect choice for my everyday hydration.`,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
  },
  {
    name: "राहिल अली",
    title: "Regular User",
    text: `स्प्लैश पानी की क्वालिटी बेहतरीन है। पानी बहुत साफ़ और ताज़गी से भरपूर होता है। इसके अलग-अलग साइज़ की बोतलें बहुत मुफ़ीद हैं और ये अब मेरा रोज़ाना इस्तेमाल का पानी बन चुका है।`,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
  },
  {
    name: "सौरभ गुप्ता",
    title: "Regular User",
    text: `मैंने कई ब्रांड के पैकेज्ड पानी ट्राई किए हैं, लेकिन स्प्लैश जैसा पानी कहीं नहीं मिला। इसकी शुद्धता और स्वाद बाकी ब्रांड्स से कहीं बेहतर है। अब मैं कोई दूसरा ब्रांड इस्तेमाल करने का सोच भी नहीं सकता। स्प्लैश के बिना मेरी दिनचर्या अधूरी है!`,
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
                <RxAvatar size={40} />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  {/* <p className="text-sm opacity-75">{testimonial.title}</p> */}
                </div>
              </div>
              <p className="text-xl font-semibold mt-4">{testimonial.text}</p>
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
