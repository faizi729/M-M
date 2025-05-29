import { useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    rating: 5,
    text: "Botanica rice crackers are a staple in my pantry. They are a healthier alternative to traditional crackers and chips, but still satisfy my craving for something spicy and crunchy. Chilli garlic flavor is my personal favorite - it's so delicious!",
    author: "Jennifer – From California",
  },
  {
    rating: 5,
    text: "These crackers are incredible! Perfectly crispy and full of flavor. Love the guilt-free snacking.",
    author: "Amit – From New York",
  },
  {
    rating: 5,
    text: "Perfect for evening snacks. Great texture, and the spice level is just right.",
    author: "Priya – From Texas",
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative bg-white shadow-xl rounded-2xl p-6 max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-center justify-center border-r border-gray-200 p-4">
          <div className="text-5xl font-bold text-red-500">4.9</div>
          <p className="text-gray-500 text-sm mt-1">Based on 5000+ reviews</p>
          <div className="mt-6 space-y-2 w-full">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div key={i} className="flex items-center text-sm text-gray-600">
                <span className="w-6">{star}★</span>
                <div className="w-full h-2 bg-gray-200 rounded ml-2 relative">
                  {star === 5 && <div className="bg-red-500 h-2 rounded w-[95%]"></div>}
                  {star === 4 && <div className="bg-red-300 h-2 rounded w-[5%]"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 px-6 flex flex-col justify-center">
          <div className="flex items-center space-x-1 text-red-500 mt-4 md:mt-0">
            {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" className="text-red-500" />
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            {reviews[currentIndex].text}
          </p>
          <p className="mt-4 font-semibold text-sm text-gray-800">
            {reviews[currentIndex].author}
          </p>

          {/* Dots */}
          <div className="flex items-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
