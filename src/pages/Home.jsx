import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Quality from "../components/Quality.jsx";
import OrderNow from "../components/OrderNow.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonial.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Quality />
      <OrderNow />
      <Features />
      <Testimonials />
      <Footer />

      {/* Bottom sticky div for mobile */}
      <div className="sm:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-[18rem] p-3 rounded-t-sm bg-white shadow-lg text-center z-30">
        <h1 className="font-montserrat font-bold text-black mb-2">
          For Dealership
        </h1>
        <button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=9761154541&text=I%20want%20to%20become%20a%20dealer.",
              "_blank",
              "noopener noreferrer"
            )
          }
          className="w-full bg-blue-500 text-white py-2 px-4  font-semibold rounded-lg">
          Enquire Now on Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Home;
