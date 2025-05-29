import React from 'react';
import s1 from "../assets/s1.png";

const Intro = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-20'>
      {/* Left Image */}
      <div className='w-full md:w-[500px] h-auto rounded-3xl overflow-hidden'>
        <img src={s1} alt="Intro Visual" className='w-full h-full object-cover rounded-3xl' />
      </div>

      {/* Right Content */}
      <div className='w-full md:w-1/2 flex flex-col gap-4'>
        <h1 className="font-bold text-[#F3274C] text-xl md:text-2xl">Welcome to M&M</h1>
        <h2 className='font-bold text-2xl md:text-[45px] leading-tight'>Who We are, What We do?</h2>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, repudiandae pariatur
          magnam natus est tenetur nisi quibusdam repellendus deserunt architecto.
        </p>

        {/* Boxes */}
        <div className='flex flex-col sm:flex-row gap-6 mt-6'>
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="h-[200px] sm:h-[250px] w-full sm:w-[250px] bg-white rounded-3xl shadow-lg transition duration-300"
              style={{
                boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
