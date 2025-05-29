import React from 'react';
import container from "../assets/Container.png";

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-10 px-4">
      {/* Heading */}
      <h1 className="text-[#F3274C] font-bold text-2xl">Express Delivery</h1>

      {/* Main Title */}
      <p className="font-bold text-3xl sm:text-4xl md:text-[45px] text-center tracking-tight">
        60 Minute Delivery Process
      </p>

      {/* Description */}
      <div className="flex justify-center items-center max-w-2xl">
        <p className="text-[#555555] text-sm sm:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa, itaque excepturi voluptatum quae at
          nesciunt magnam quibusdam tempora unde? Dolores commodi laudantium id nobis suscipit dolore fuga illum.
          Consequuntur, excepturi fugit, tempore, beatae officiis laboriosam ipsam suscipit accusantium exercitationem
          est nihil neque facere. Amet cum eaque eius, culpa optio quas est rerum laborum temporibus molestiae,
          voluptatem, numquam a ullam.
        </p>
      </div>

      {/* Image */}
      <div className="mt-10 mb-20">
        <img src={container} alt="Delivery Process Illustration" className="w-full max-w-4xl" />
      </div>
    </div>
  );
};

export default Services;
