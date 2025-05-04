import React from "react";
import splashLeft from "../assets/splash-left.png";
import splashRight from "../assets/splash-right.png";
import userImg from "../assets/user.png";

export const ContentFourth = () => {
  return (
    <div className="relative bg-white py-24 px-6 sm:px-10 md:px-24 text-center font-playfair overflow-visible">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#432818] relative z-10">
        Our coffee perfection feedback
      </h2>
      <p className="text-gray-500 mt-4 text-base sm:text-lg md:text-xl relative z-10">
        Our customers have amazing things to say about us
      </p>

      {/* Testimonial Card */}
      <div className="relative bg-[#FFF8F0] mt-16 max-w-5xl mx-auto rounded-xl px-10 sm:px-14 py-16 shadow-lg z-10">
        {/* Quote Icon */}
        <div className="text-5xl md:text-6xl text-[#432818] mb-6">❝</div>

        <p className="text-gray-700 leading-relaxed text-lg sm:text-xl md:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>

        {/* Name & Role */}
        <div className="mt-8 text-[#432818] font-semibold text-xl md:text-2xl">
          Jonny Thomas
        </div>
        <div className="text-gray-500 text-sm md:text-base">
          Project Manager
        </div>

        {/* Profile Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-56px]">
          <img
            src={userImg}
            alt="User"
            className="w-[112px] h-[112px]"
            style={{
              border: "none",
              borderRadius: 0,
              background: "transparent",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Arrows */}
        <div className="absolute -left-6 sm:-left-10 top-1/2 transform -translate-y-1/2">
          <button className="bg-[#F9C06A] w-12 h-12 md:w-14 md:h-14 rounded-lg shadow hover:bg-yellow-300 text-2xl font-bold flex items-center justify-center">
            ←
          </button>
        </div>
        <div className="absolute -right-6 sm:-right-10 top-1/2 transform -translate-y-1/2">
          <button className="bg-[#F9C06A] w-12 h-12 md:w-14 md:h-14 rounded-lg shadow hover:bg-yellow-300 text-2xl font-bold flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      {/* Splash images — in front */}
      <img
        src={splashLeft}
        alt="Left splash"
        className="absolute left-0 bottom-10 w-40 sm:w-52 md:w-64 z-30 transform scale-y-[-1]"
      />
      <img
        src={splashRight}
        alt="Right splash"
        className="absolute right-0 top-40 w-40 sm:w-52 md:w-64 z-30 "
      />
    </div>
  );
};
