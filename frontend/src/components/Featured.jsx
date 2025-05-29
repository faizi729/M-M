import React from 'react';
const f1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNr_O_WJy_3jrVKRT3oO3OcI_HWcVTP9bRg&s"
// import f2 from "../assets/f2.png";
// import f3 from "../assets/f3.png";
// import f4 from "../assets/f4.png";
// import f5 from "../assets/f5.png";
// import f6 from "../assets/f6.png";

const Featured = () => {
  const items = [
    { img: f1, price: "₹500/KG", name: "Chicken" },
    { img: f1, price: "From ₹200", name: "Biryani" },
    { img: f1, price: "From ₹150", name: "Paneer Butter Masala" },
    { img: f1, price: "₹100", name: "Dosa" },
    { img: f1, price: "₹700/KG", name: "Rogan Josh" },
    { img: f1, price: "₹1000/KG", name: "Tandoori Chicken" },
  ];

  return (
    <div className="flex flex-wrap justify-center   p-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] h-[400px] border flex flex-col justify-center items-center gap-5 border-[#E5E5E5]"
        >
          <div className="flex -mt-10">
            <img src={item.img} alt={item.name} className='rounded-full' />
          </div>
          <div>
            <p className="text-[#F3274C] font-bold text-[17px]">{item.price}</p>
          </div>
          <div>
            <h1 className="font-medium text-black text-[20px] text-center">{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
