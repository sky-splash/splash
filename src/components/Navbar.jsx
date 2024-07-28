import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}>
      <div className="flex  justify-around items-center w-full font-montserrat font-semibold ">
        <img src={logo} alt="" className="h-[5rem]" />
        <ul className="flex space-x-10">
          <li>Home</li>
          <li>pages</li>
          <li>Services</li>
          <li>Project</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <div className="flex items-center space-x-6">
          <FaPhone className="text-3xl" />
          <h1>+99123456293</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
