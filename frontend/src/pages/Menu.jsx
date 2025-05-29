import { ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
 
const f1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNr_O_WJy_3jrVKRT3oO3OcI_HWcVTP9bRg&s"
// import f2 from "../assets/f2.png"
const f2 ="https://vegbuffet.com/wp-content/uploads/2020/01/best-kanda-poha-recipe.jpg"
// import f3 from "../assets/f3.png"
const f3="https://www.nehascookbook.com/wp-content/uploads/2022/09/Punjabi-thali-WS-1.jpg"
import f4 from "../assets/f4.png"

// import f5 from "../assets/f5.png"
const f5="https://priyafoods.com/cdn/shop/files/VADA_2.jpg?v=1702290482"
// import f6 from "../assets/f6.png"
const f6="https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg"
const Menu = () => {
  const menuItems = [
    { name: "daal bati", price: 500, rating: 5,image:f1, type: "Only veg" },
    { name: "Poha", price: 250, rating: 4,image:f2, type: "Light Breakfast" },
    { name: "Veg Thali", price: 400, rating: 4,image:f3, type: "Only Veg" },
    { name: "Masala Dosa", price: 300, rating: 5,image:f4, type: "South Indian" },
    { name: "Vada", price: 150, rating: 3,image:f5, type: "South Indian" },
    { name: "Manchurian", price: 450, rating: 5,image:f6, type: "Chinese" },
    
  ];

  const foodTypes = [
    "Light Breakfast",
    "Only Veg",
    "South Indian",
    "Chinese",
  ];

  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceLimit, setPriceLimit] = useState(1000);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredItems = menuItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchType = selectedTypes.length ? selectedTypes.includes(item.type) : true;
    const matchPrice = item.price <= priceLimit;
    return matchSearch && matchType && matchPrice;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="md:w-1/4">
          <div className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">FILTER</h3>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Filter by Price</label>
              <input
                type="range"
                min="150"
                max="1000"
                step="1"
                
                value={priceLimit}
                onChange={(e) => setPriceLimit(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-gray-600 text-sm">
                <span>₹150</span>
                <span>₹{priceLimit}</span>
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Filter by Food</label>
              <div className="space-y-2">
                {foodTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                      className="mr-2"
                    />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="md:w-3/4">
          {/* Search Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-1/2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="text-gray-600">
              Showing {filteredItems.length} Result{filteredItems.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
                <div className='border-2 border-dashed rotate duration-initial animate-spin border-red-500 w-54 mx-auto h-54 rounded-full flex justify-center items-center '>

                </div>
                <div className="w-53 h-48 -mt-50 bg-white p-4 rotate-0   rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src={item.image} alt="" className='flex rounded-full  justify-center' />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-2">The Registration Fee</p>
                <p className="text-xl font-bold text-red-500 mb-4">₹{item.price}</p>
                <div className="flex justify-center">
                <button className="bg-[#F3274c] flex justify-center text-white hover:bg-white hover:border transition duration-300 cursor-pointer hover:border-[#F3274c] hover:text-[#F3274C] py-2 px-4 rounded-lg">
                  Add to cart <ShoppingCart />
                </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-8 flex justify-center">
            <button className="bg-gray-300 px-3 py-1 rounded-md mx-1">1</button>
            <button className="bg-gray-200 px-3 py-1 rounded-md mx-1">2</button>
            <button className="bg-gray-200 px-3 py-1 rounded-md mx-1">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
