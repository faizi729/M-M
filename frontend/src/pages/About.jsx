import React from 'react';
import { FaLeaf, FaUtensils, FaHeadset, FaMousePointer } from 'react-icons/fa';
import img1 from "../assets/about.jpg"
import img from "../assets/food3.png"
const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-red-50 px-4 py-3 rounded-lg shadow-sm">
    <div className="text-red-500 text-xl">{icon}</div>
    <span className="text-gray-800 font-medium">{text}</span>
  </div>
);

const About = () => {
  return (
    <>
      {/* Container for image + wave */}
      <div className="relative bg-black">
        {/* Image */}
        <div
          className="w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/bread-slices-with-salad-top_140725-6058.jpg?ga=GA1.1.712216897.1738705920&semt=ais_hybrid&w=740')",
          }}
        ></div>

        {/* SVG Wave */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full h-[150px] bg-no-repeat bg-bottom"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDE1MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgNDAuMjE1bDY0IDE5LjYwMmM2NCAxOS45NjkgMTkyIDU4LjYyIDMyMCAzOS4yOTRDNTEyIDc5Ljc4NiA2NDAgLjY0NSA3NjggLjkyYzEyOC0uMjc1IDI1NiA3OC44NjYgMzg0IDg4LjM0NSAxMjggOS44NDYgMjU2LTQ5LjA1IDM4NC01My45MjcgMTI4LTUuMjQ1IDI1NiA0NC40NDggMzIwIDY4LjY1bDY0IDI0LjU3MVYxNTBIMFY0MC4yMTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+")',
            backgroundSize: '100% 150px',
            zIndex: 10,
          }}
        ></div>
      </div>

      {/* About Section */}
      <div className="bg-[#ffffff] pt-8 pb-20 text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          We bring you hand-crafted meals made with love and fresh ingredients. From farm to table, we care about what you eat.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Images */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="rounded-[2rem] overflow-hidden w-72 h-72">
              <img
                src={img}
                alt="Chef Preparing Food"
                className=" "
                
              />
            </div>
             
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h4 className="text-red-500 font-semibold uppercase">Why Choose Us</h4>
            <h2 className="text-4xl font-bold text-gray-900">Why we are the best</h2>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout, the point of using more-or-less normal.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Feature icon={<FaLeaf />} text="Fresh Food" />
              <Feature icon={<FaUtensils />} text="Clean Kitchen" />
              <Feature icon={<FaHeadset />} text="24/7 Services" />
              <Feature icon={<FaMousePointer />} text="Online Order" />
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-red-500 font-semibold">Yamoto Shohito</p>
                <p className="text-sm text-gray-500">Founder of Sushima</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex justify-end">
        <img src={img1} className='h-[300px] w-full' alt="" />
        </div>
      </section>
      <section>
        <div className='mt-10 flex justify-center text-[30px] font-bold text-[#F3274C]'>
            Best Food In the Town!
        </div>
        <div className='mt-10 flex justify-center'>
            <video src="https://videos.pexels.com/video-files/3015488/3015488-sd_640_360_24fps.mp4" className='rounded-3xl mb-5' controls autoplay loop muted></video>
        </div>
      </section>
    </>
  );
};

export default About;
