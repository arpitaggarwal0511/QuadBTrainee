import React, { Fragment, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="w-full px-4 sm:px-6 lg:px-16 py-5 flex justify-between items-center relative z-40">
        {/* Logo */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-clicker text-white">
          Bean Scene
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {["Home", "Menu", "About Us", "Contact Us"].map((item, index) => (
            <li
              key={index}
              className="text-base lg:text-lg font-playfair text-white"
            >
              {item}
            </li>
          ))}
          <li className="text-base lg:text-lg underline font-playfair text-white">
            Sign In
          </li>
          <li>
            <button className="bg-[#F9C06A] text-black font-playfair text-base lg:text-lg px-6 py-2 rounded-full shadow-md hover:bg-yellow-300 transition-all">
              Sign Up
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 right-0 bg-black bg-opacity-90 px-6 py-6 space-y-5 flex flex-col z-40">
            {["Home", "Menu", "About Us", "Contact Us"].map((item, index) => (
              <li key={index} className="text-base font-playfair text-white">
                {item}
              </li>
            ))}
            <li className="text-base underline font-playfair text-white">
              Sign In
            </li>
            <li>
              <button className="bg-[#F9C06A] text-black font-playfair text-base px-6 py-2 rounded-full shadow-md hover:bg-yellow-300 transition-all">
                Sign Up
              </button>
            </li>
          </ul>
        )}
      </div>
    </Fragment>
  );
};
