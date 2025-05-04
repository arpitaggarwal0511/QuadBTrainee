import React from "react";
import coffeeHeart from "../assets/coffee-heart.png";
import cup1 from "../assets/cup1.png";
import cup2 from "../assets/cup2.png";
import cup3 from "../assets/cup3.png";
import cup4 from "../assets/cup4.png";
import splashLeft from "../assets/splash-left.png";
import splashRight from "../assets/splash-right.png";
import beanIcon from "../assets/icon-bean.png";
import qualityIcon from "../assets/icon-quality.png";
import cupIcon from "../assets/icon-cup.png";
import priceIcon from "../assets/icon-price.png";

export const ContentTwo = () => {
  return (
    <div className="relative bg-white text-[#603809] px-4 sm:px-6 md:px-20 py-20 space-y-24 font-playfair overflow-hidden">
      {/* Section 1: Discover Coffee */}
      <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Discover the best coffee
          </h2>
          <p className="text-base sm:text-lg text-[#707070] leading-relaxed">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood...
          </p>
          <button className="bg-[#F9C06A] text-black px-6 py-3 rounded-full shadow-md text-sm sm:text-base w-max">
            Learn More
          </button>
        </div>
        <img
          src={coffeeHeart}
          alt="coffee heart"
          className="w-44 sm:w-56 md:w-72 mt-8 md:mt-0"
        />
      </div>

      {/* Splash Left Image */}
      <img
        src={splashLeft}
        alt="splash left"
        className="absolute -left-20 top-[150px] w-72 sm:w-[400px] opacity-90 z-20 pointer-events-none"
      />

      {/* Section 2: Coffee styles */}
      <div className="text-center space-y-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Enjoy a new blend of coffee style
        </h2>
        <p className="text-[#707070] text-base sm:text-lg max-w-xl mx-auto">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>

        {/* Coffee Cards */}
        {/* Coffee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { img: cup1, name: "Cappuccino" },
            { img: cup2, name: "Chai Latte" },
            { img: cup3, name: "Macchiato" },
            { img: cup4, name: "Expresso" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFF9F1] rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full object-cover h-full"
              />
              <div className="flex flex-col items-center justify-between p-4 flex-grow">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-xs text-[#707070]">Coffee 50% | Milk 50%</p>
                <p className="text-sm font-medium">$8.50</p>
                <button className="bg-[#F9C06A] text-black px-4 py-1 rounded-full mt-4 text-sm">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Why are we different */}
      <div className="relative">
        <img
          src={splashRight}
          alt="splash right"
          className="absolute -right-40 top-[-150px] w-72 sm:w-[400px] opacity-90 z-0 pointer-events-none"
        />
        <div className="text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Why are we different?
          </h2>
          <p className="text-[#707070] text-base">
            We don’t just make your coffee, we make your day!
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {[
              {
                icon: beanIcon,
                title: "Supreme Beans",
                desc: "Beans that provides great taste",
              },
              {
                icon: qualityIcon,
                title: "High Quality",
                desc: "We provide the highest quality",
              },
              {
                icon: cupIcon,
                title: "Extraordinary",
                desc: "Coffee like you have never tasted",
              },
              {
                icon: priceIcon,
                title: "Affordable Price",
                desc: "Our Coffee prices are easy to afford",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFF9F1] p-6 rounded shadow-md text-center flex flex-col items-center"
              >
                <img src={item.icon} alt={item.title} className="h-12 mb-3" />
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-[#707070] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 space-y-3 relative z-10">
        <p className="text-base text-[#707070]">
          Great ideas start with great coffee. Let's help you achieve that
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold">
          Get started today.
        </h3>
        <button className="bg-[#F9C06A] text-black px-6 py-3 rounded-full shadow-md text-sm sm:text-base">
          Join Us
        </button>
      </div>
    </div>
  );
};
