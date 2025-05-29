import React from 'react';
import o1 from "../assets/o1.png";
import o2 from "../assets/o2.png";
import o3 from "../assets/o3.png";
import o4 from "../assets/o4.png";
import o5 from "../assets/o5.png";
import o6 from "../assets/o6.png";
import { ShoppingBasket } from 'lucide-react';

// ⭐ Reusable rating display
const Rating = () => (
  <p className="text-sm text-amber-500">★★★★★ (5)</p>
);

// ⭐ Small Food Card
const FoodCard = ({ img, title, price, oldPrice }) => (
  <div className="rounded-3xl hover:scale-105 transition duration-300 shadow-2xl w-[300px] h-[155px] flex relative bg-white">
    <div className="w-[45%]">
      <img src={img} alt={title} className="w-full h-full object-cover rounded-l-3xl" />
    </div>
    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl">♥</button>
    <div className="flex flex-col justify-center items-center w-[55%] text-center px-2">
      <Rating />
      <h1 className="font-bold text-sm mt-1">{title}</h1>
      <div className="flex gap-2 mt-2 items-end">
        <p className="text-[#F3274C] font-bold text-base">{price}</p>
        <p className="text-gray-500 line-through text-xs">{oldPrice}</p>
      </div>
    </div>
  </div>
);

// ⭐ Big Offer Card
const BigOfferCard = ({ img, title, price, oldPrice }) => (
  <div className="shadow-2xl hover:scale-105 transition duration-300 flex flex-col w-[350px] rounded-3xl overflow-hidden relative bg-white">
    <img src={img} alt={title} className="w-full h-[300px] object-cover" />
    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl">♥</button>
    <div className="p-4 mt-4">
      <Rating />
      <h1 className="font-bold text-lg mt-1">{title}</h1>
      <div className="flex gap-2 mt-2 items-end">
        <p className="text-[#F3274C] font-bold text-lg">{price}</p>
        <p className="text-gray-500 line-through text-sm">{oldPrice}</p>
      </div>
    </div>
    <div className="flex justify-end px-4 pb-4">
      <ShoppingBasket className="text-gray-700 hover:text-[#F3274C]" />
    </div>
  </div>
);

// ⭐ Offer Section
const Offer = () => {
  const leftOffers = [
    { img: o1, title: 'Butter Chicken', price: '₹1200', oldPrice: '₹1500' },
    { img: o2, title: 'Pasta', price: '₹700', oldPrice: '₹1200' },
    { img: o3, title: 'Paneer Masala', price: '₹800', oldPrice: '₹1000' },
  ];

  const rightOffers = [
    { img: o3, title: 'Butter Chicken', price: '₹1200', oldPrice: '₹1500' },
    { img: o5, title: 'Pasta', price: '₹700', oldPrice: '₹1200' },
    { img: o6, title: 'Paneer Masala', price: '₹800', oldPrice: '₹1000' },
  ];

  return (
    <div className="w-full py-10 px-5 flex flex-col items-center">
      <h1 className="font-bold text-2xl mb-8">Offers For You</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {leftOffers.map((offer, idx) => (
            <FoodCard key={idx} {...offer} />
          ))}
        </div>

        {/* Center Big Offer */}
        <BigOfferCard img={o4} title="Paneer Masala" price="₹800" oldPrice="₹1000" />

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {rightOffers.map((offer, idx) => (
            <FoodCard key={idx} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
