import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();
  const contactHandler=()=>{
    navigate('/contact-us')
  }
  const blogHandler=()=>{
    navigate('/blogs')
  }


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
      <div className="flex justify-between items-center w-full px-4 py-2 lg:px-8 lg:py-4 font-montserrat font-semibold">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-12 lg:h-[5rem]" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10">
          <li>Home</li>
          <li>Pages</li>
          <li>Services</li>
          <li>Projects</li>
          <li className="cursor-pointer" onClick={blogHandler}>Blog</li>
          <li className="cursor-pointer" onClick={contactHandler}>Contact Us</li>
        </ul>

        {/* Phone Section */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <FaPhone className="text-xl lg:text-3xl" />
          <h1 className="text-sm lg:text-lg">+91-9761154541</h1>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white w-full shadow-lg`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li onClick={() => setIsMenuOpen(false)}>Home</li>
          <li onClick={() => setIsMenuOpen(false)}>Pages</li>
          <li onClick={() => setIsMenuOpen(false)}>Services</li>
          <li onClick={() => setIsMenuOpen(false)}>Projects</li>
          <li onClick={() => setIsMenuOpen(false)}>Blog</li>
          <li onClick={() => setIsMenuOpen(false)}>Contact Us</li>
        </ul>
        <div className="flex justify-center items-center space-x-4 py-4">
          <FaPhone className="text-xl" />
          <h1 className="text-sm">+99123456293</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
