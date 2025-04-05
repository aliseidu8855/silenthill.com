import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = ({ header, subheader, images, transitionDuration = 1000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container h-screen flex items-center justify-center text-white px-4 2xl:px-80 lg:px-40 md:px-11 relative">
      {/* Image Background with Lazy Loading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hero Background"
            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: `${transitionDuration}ms` }}
            loading="lazy"
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* Text Content */}
      <div className="text-center z-10 relative max-w-4xl mx-auto px-4">
        <h1 className="text-[#e0c999] text-2xl sm:text-4xl  font-bold mb-4">
          {header}
        </h1>
        <p className="text-[#e0c999]  lg:text-lg leading-relaxed text-justify">
          {subheader}
        </p>
      </div>
    </div>
  );
};

export default Hero;
