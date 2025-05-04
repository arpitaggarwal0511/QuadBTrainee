import React from 'react';
import bgImage from "../assets/coffee-bg.png";
import coffeeCup from "../assets/coffee-cup.png";
import beansOverlay from "../assets/coffee-beans.png";

export const ContentThree = () => {
  return (
    <div className="relative font-playfair text-white overflow-hidden">
      {/* Background image and brown overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-[#603809]/70 z-0" />

      {/* Beans overlay */}
      <img
        src={beansOverlay}
        alt="Coffee Beans"
        className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-64 z-10 pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
        {/* Text content */}
        <div className="text-center md:text-left space-y-6 md:max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get a chance to have an <br />
            <span className="text-whites">Amazing morning</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90">
            We are giving you a one-time opportunity to <br className="hidden sm:block" />
            experience a better life with coffee.
          </p>
          <button className="bg-[#F9C06A] text-black font-semibold px-6 py-3 rounded-full">
            Order Now
          </button>
        </div>

        {/* Coffee cup image */}
        <img
          src={coffeeCup}
          alt="Coffee Cup"
          className="w-28 sm:w-40 md:w-52 lg:w-60 mt-10 md:mt-0 md:absolute md:right-20 md:bottom-16 z-30"
        />
      </div>
    </div>
  );
};
