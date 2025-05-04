import React from 'react';
import bgImage from "../assets/coffee-bg.png";
import cupLeft from "../assets/coffee-cup-left.png";
import cupRight from "../assets/coffee-cup-right.png";

export const ContentFive = () => {
  return (
    <div className="relative font-playfair text-white overflow-visible">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Brown Tint Overlay */}
      <div className="absolute inset-0 bg-[#603809]/80 z-0" />

      {/* Decorative Cups - on border with footer */}
      <img
        src={cupLeft}
        alt="Left cup"
        className="absolute bottom-[-40px] left-0 w-28 sm:w-36 md:w-48 z-20"
      />
      <img
        src={cupRight}
        alt="Right cup"
        className="absolute bottom-[-40px] right-0 w-28 sm:w-36 md:w-48 z-20"
      />

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Subscribe to get the <br className="hidden sm:block" /> Latest News
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8">
          Don’t miss out on our latest news, updates, tips and special offers
        </p>

        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row justify-center items-center bg-white rounded-full overflow-hidden max-w-2xl mx-auto shadow-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-black text-sm sm:text-base outline-none w-full"
          />
          <button
            type="submit"
            className="bg-[#F9C06A] text-black px-6 py-3 font-semibold text-sm sm:text-base w-full sm:w-auto hover:bg-[#fbcf89] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
