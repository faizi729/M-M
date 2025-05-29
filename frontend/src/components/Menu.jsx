import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import { ShoppingBasket, ShoppingCart } from 'lucide-react';
const f1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNr_O_WJy_3jrVKRT3oO3OcI_HWcVTP9bRg&s"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Food');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const categories = ['Food', 'Fruits', 'Drink', 'Snacks'];

  const products = [
    { name: 'Roasted Corn', price: 1500, category: 'Food', image: m1 },
    { name: 'Purple Onion', price: 1000, oldPrice: 1200, category: 'Food', image: m2, discount: '17%', countdown: '130:04:56:28' },
    { name: 'Chile Bell Pepper', price: 1800, category: 'Food', image: m3 },
    { name: 'Organic Asparagus', price: 1600, oldPrice: 1900, category: 'Food', image: m3, discount: '16%' },
    { name: 'Cherry Tomato', price: 1400, category: 'Food', image: f1 },
    { name: 'Cabbage Bok Choy', price: 1500, category: 'Food', image: m1 },
    { name: 'Fresh Apple', price: 800, category: 'Fruits', image: m2 },
    { name: 'Orange Juice', price: 500, category: 'Drink', image: m3 },
    { name: 'Pizza', price: 200, category: 'Snacks', image: m4 },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1); // reset to first page when category changes
  };

  return (
    <div className="bg-[#E7F5F5] py-10 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-[35px] text-[#222]">Best Sellers</h1>
        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mt-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={`text-[16px] cursor-pointer font-medium pb-1 border-b-2 transition-all ${
                activeCategory === cat
                  ? 'text-[#F3274C] border-[#F3274C]'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {paginatedProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  -{product.discount}
                </div>
              )}
              {product.countdown && (
                <div className="absolute bottom-2 left-2 bg-black text-white text-[10px] px-2 py-1 rounded">
                  {product.countdown.replace(/:/g, ' : ')}
                </div>
              )}
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">♥</button>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500">★★★★★ (5)</p>
              <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#F3274C] font-bold">₹{product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="line-through text-sm text-gray-400">₹{product.oldPrice}</span>
                  )}
                </div>
                <ShoppingBasket className="text-xl text-black cursor-pointer hover:text-[#F3274C]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded bg-[#F3274C] text-white font-medium disabled:opacity-50`}
        >
          Prev
        </button>
        <span className="px-4 py-2 text-[#222] font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded bg-[#F3274C] text-white font-medium disabled:opacity-50`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Menu;
