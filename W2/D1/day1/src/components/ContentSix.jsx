import React from "react";
import beanBg from "../assets/coffee-footer-bg.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const ContentSix = () => {
  return (
    <footer className="relative text-white pt-24 pb-32 px-6 sm:px-12 md:px-24 overflow-hidden bg-[#442808]">
      {/* Background Image with Dark Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={beanBg}
          alt="coffee beans"
          className="w-full h-full object-bottom object-cover"
        />
        <div className="absolute inset-0 bg-[#442808]/30 pointer-events-none" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo and About */}
        <div>
          <h2 className="text-4xl font-clicker mb-4">Bean Scene</h2>
          <p className="text-sm text-gray-200 mb-6 font-playfair leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            It has survived not only five centuries but also the leap into electronic typesetting.
          </p>
          <div className="flex gap-4 text-white text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* About */}
        <div className="font-playfair text-sm text-gray-200 space-y-2">
          <h3 className="text-base font-semibold text-white mb-3">About</h3>
          <p>Menu</p>
          <p>Features</p>
          <p>News & Blogs</p>
          <p>Help & Supports</p>
        </div>

        {/* Company */}
        <div className="font-playfair text-sm text-gray-200 space-y-2">
          <h3 className="text-base font-semibold text-white mb-3">Company</h3>
          <p>How we work</p>
          <p>Terms of service</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </div>

        {/* Contact */}
        <div className="font-playfair text-sm text-gray-200 space-y-2">
          <h3 className="text-base font-semibold text-white mb-3">Contact Us</h3>
          <p>
            Akshya Nagar 1st Block 1st Cross,<br />
            Ramamurthy nagar, Bangalore-560016
          </p>
          <p>+1 202-918-2132</p>
          <p>beanscene@mail.com</p>
          <p>www.beanscene.com</p>
        </div>
      </div>
    </footer>
  );
};
