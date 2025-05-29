import React from "react";
import component1 from "../assets/Container(1).png"
import component2 from "../assets/Container(2).png"
import img1 from "../assets/bgimg1.png"
const Footer = () => {
  return (
    <footer className="relative bg-[#F5F8FD] text-gray-800 py-10 px-4 overflow-hidden">
      {/* Left Decoration */}
      <img
        src={component2}
        alt="Left Decoration"
        className="absolute bottom-0 left-0 w-40 sm:w-52 lg:w-64"
      />

      {/* Right Decoration */}
      <img
        src={component1}
        alt="Right Decoration"
        className="absolute bottom-0 right-0 w-40 sm:w-52 lg:w-64"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 relative z-10">
        {/* Logo and Info */}
        <div className="bg-[#F2385A] text-white p-6 rounded-xl w-full sm:w-[250px]">
          <img
            src={img1}
            alt="M&M Resto & Cafe"
            className="w-16 mb-4"
          />
          <p>Tuesday – Saturday: 12:00pm – 23:00pm</p>
          <p className="font-semibold mt-2">Closed on Sunday</p>
          <p className="mt-4 text-sm">5 star rated on TripAdvisor</p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-lg relative inline-block">
            About
            <span className="block h-1 w-10 bg-yellow-400 mt-1" />
          </h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-bold text-lg relative inline-block">
            Menu
            <span className="block h-1 w-10 bg-yellow-400 mt-1" />
          </h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#">Steaks</a></li>
            <li><a href="#">Burgers</a></li>
            <li><a href="#">Cocktails</a></li>
            <li><a href="#">Bar B Q</a></li>
            <li><a href="#">Desserts</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full sm:w-[250px]">
          <h3 className="font-bold text-lg relative inline-block">
            Newsletter
            <span className="block h-1 w-10 bg-yellow-400 mt-1" />
          </h3>
          <p className="mt-4">Get recent news and updates.</p>
          <form className="mt-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded mb-3"
            />
            <button
              type="submit"
              className="bg-[#F2385A] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e12548]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-4 border-yellow-400 mt-10 pt-6 text-center relative z-10">
        <p className="text-sm">
          © 2025 <span className="text-[#F2385A] italic">Yamya Software Solutions</span>  | 
          <span className="font-semibold"> Faizan</span>
        </p>
        <div className="mt-2 space-x-4 font-semibold">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
