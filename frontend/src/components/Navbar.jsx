import React, { useState } from 'react';
import img1 from "../assets/bgimg1.png";
import { Link } from 'react-router-dom';
import { Menu, ShoppingBasket, X } from 'lucide-react';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = () => setShowCart(!showCart);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const removeItem = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCartItems([]);

  return (
    <nav className="h-20 flex justify-between items-center px-4 sm:px-6 shadow-md bg-white relative z-50">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={img1} alt="Logo" className="w-14 h-14 object-contain" />
        </Link>
      </div>

      {/* Nav Links - Desktop */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/event">Event</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right Side Icons */}
      <div className='flex items-center gap-4 sm:gap-6'>
        {/* Cart */}
        <div onClick={handleCartClick} className='cursor-pointer relative'>
          <ShoppingBasket className='text-green-500' />
          {showCart && (
            <div className="absolute top-12 right-0 bg-white border rounded shadow-lg w-72 p-4 z-50">
              <h3 className="font-bold mb-2">Your Cart</h3>
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">Cart is empty.</p>
              ) : (
                <ul className="text-sm text-gray-700 space-y-3">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex justify-between items-center">
                      <span>{item.name} - ₹{item.price}</span>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {cartItems.length > 0 && (
                <>
                  <button
                    className="mt-3 bg-green-500 text-white w-full py-2 rounded"
                    onClick={() => alert('Proceeding to Checkout...')}
                  >
                    Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="mt-2 text-red-500 hover:underline text-sm w-full text-center"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Contact Button */}
        <div className='hidden sm:block bg-[#ffcc22] px-4 py-2 rounded cursor-pointer'>
          <Link to="/contact">
            <span className='font-bold text-white text-sm sm:text-base'>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden cursor-pointer' onClick={toggleMobileMenu}>
          <Menu />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-40 md:hidden">
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="/shop" onClick={toggleMobileMenu}>Shop</Link>
          <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
          <Link to="/event" onClick={toggleMobileMenu}>Event</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
          <button className='bg-[#ffcc22] text-white font-bold py-2 px-6 rounded mt-2' onClick={toggleMobileMenu}>
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
