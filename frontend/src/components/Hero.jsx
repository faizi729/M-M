import React from 'react';
import img1 from "../assets/img1.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen">
      {/* Background Image */}
      <img src={img1} alt="hero" className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* Text & Button Overlay */}
      <div className="absolute z-10 top-[25%] sm:top-[30%] left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] p-4">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          In the perfect space,<br /> fantastic food
        </h1>

        <p className="text-white font-medium mt-4 text-sm sm:text-base max-w-xl">
          Fantastic food deserves a space that enhances its flavors,<br />
          where every detail is crafted to delight and inspire.
        </p>

        {/* Fancy Button */}
        <div className="relative inline-block mt-6 sm:mt-8 group">
          {/* Outer Border Effect */}
          <div className="absolute -inset-2 rounded-2xl top-[-20px] left-[1px] px-12 py-8 border-2 border-[#F3274C] transition-all duration-300 group-hover:bg-[#F3274C] z-0"></div>

          {/* Button */}
          <Link
            to="/"
            className="relative z-10 bg-[#F3274C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:text-white group-hover:text-[#F3274C] border-2 border-[#F3274C]"
          >
            See Our Menus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
