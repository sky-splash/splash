import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Quality from "../components/Quality.jsx";
import OrderNow from "../components/OrderNow.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Quality />
      <OrderNow />
    </div>
  );
};

export default Home;
