import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="  overflow-hidden leading-none">
        <svg
          className=" w-[120%] h-[120px] text-blue-950"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,120V73.71c47.1-22.3,93.5-35,140-38.8,58.41-4.8,112.19,4.3,167.91,12.9C378.13,57.65,439.4,66,500,53.51c70.12-14.1,141.76-45.85,211.12-58.12,66.49-11.67,130.72-3.44,196.11,14.82,45.9,12.47,91.25,31.08,137.16,42.71,40.3,10,85.57,9.59,127.61-3.47V120Z"
            opacity=".25"
            className="fill-current w-[120%]"></path>
          <path
            d="M0,120V97.17c47.1-22.3,93.5-35,140-38.8,58.41-4.8,112.19,4.3,167.91,12.9C378.13,97.61,439.4,106.98,500,94.5c70.12-14.1,141.76-45.85,211.12-58.12,66.49-11.67,130.72-3.44,196.11,14.82,45.9,12.47,91.25,31.08,137.16,42.71,40.3,10,85.57,9.59,127.61-3.47V120Z"
            opacity=".5"
            className="fill-current"></path>
          <path
            d="M0,120V114.24c47.1-28.06,93.5-40.74,140-44.55,58.41-4.8,112.19,4.3,167.91,12.9C378.13,114.61,439.4,123.98,500,111.5c70.12-14.1,141.76-45.85,211.12-58.12,66.49-11.67,130.72-3.44,196.11,14.82,45.9,12.47,91.25,31.08,137.16,42.71,40.3,10,85.57,9.59,127.61-3.47V120Z"
            className="fill-current"></path>
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="bg-blue-950 text-white pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-8">
            {/* Contact Section */}
            <div className="w-full sm:w-1/2 lg:w-auto">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="opacity-75 mb-4">Head Office : Civil Lines, Rampur, Uttar Pradesh</p>
              <p className="opacity-75 mb-4">Work Office : Near Police Line, Rampur, Uttar Pradesh</p>
              <p className="opacity-75 mb-4">Email: support@skyinternationals.in</p>
              <p className="opacity-75">Phone: +91-9761154541</p>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/2 lg:w-auto">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="opacity-75 hover:opacity-100">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="opacity-75 hover:opacity-100">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="opacity-75 hover:opacity-100">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="opacity-75 hover:opacity-100">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="w-full sm:w-1/2 lg:w-auto">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full sm:w-1/2 lg:w-auto">
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="opacity-75 mb-4">
                Subscribe to our newsletter to receive the latest updates and
                offers.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg mb-2 w-full text-blue-950"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
