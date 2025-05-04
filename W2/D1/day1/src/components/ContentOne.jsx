import React, { Fragment } from 'react';

export const ContentOne = () => {
  return (
    <Fragment>
      <div className="max-w-6xl px-6 sm:px-10 lg:px-16 py-20 sm:py-24 space-y-8 text-white">
        <p className="text-xl sm:text-2xl md:text-3xl font-playfair">
          We’ve got your morning covered with
        </p>
        <h1 className="text-[64px] sm:text-[96px] md:text-[120px] leading-none font-clicker">
          Coffee
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-playfair text-white max-w-3xl">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our customers.
        </p>
        <button className="bg-[#F9C06A] text-black font-playfair px-8 py-4 text-base sm:text-lg rounded-full shadow-md">
          Order Now
        </button>
      </div>
    </Fragment>
  );
};
