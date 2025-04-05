import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Ambulance from "../../../assets/images/gallery/air_ambulance.webp";
import Health from "../../../assets/images/health3.webp";
import Climate from "../../../assets/images/climate.webp";
import Education from "../../../assets/images/education2.webp";

const Projects = () => {
  let scroll = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-bottom-normal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div
      ref={scroll}
      className="gallery-container grid grid-col-1 md:grid-cols-2 gap-4 mt-8 mb-8 px-4 2xl:px-80 lg:px-40 md:px-11"
    >
      {/* Card 1 - Air Ambulance Project */}
      <div className="gallery-card flex flex-col relative bg-[#8b0000] shadow-lg rounded-lg overflow-hidden fade-in-bottom-normal ">
        <div className="relative">
          {/* Image Section */}
          <img
            src={Ambulance}
            alt="Air Ambulance"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          {/* Overlay Text */}
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-[#e0c999] px-4 py-2 text-sm uppercase font-bold tracking-wide">
            Air Ambulance
          </div>
        </div>
        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3 text-[#e0c999]">
            Air Ambulance
          </h2>
          <p className="text-[#e0c999] text-sm mb-5 leading-relaxed text-opacity-80 text-justify">
            Equipped with state-of-the-art medical equipment and staffed by
            experienced medical professionals, our Air Ambulance ensures swift
            access to specialized medical care, even in remote or hard-to-reach
            locations.
          </p>
          <Link to="/whatwedo#emergency-ambulance">
            <button className="bg-[#e0c999] hover:bg-[#d4b57d] text-[#282936] px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e0c999] focus:ring-offset-2">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Card 4 - Climate Project */}
      <div className="gallery-card relative bg-[#8b0000] shadow-lg rounded-lg overflow-hidden fade-in-bottom-normal ">
        <div className="relative">
          {/* Image Section */}
          <img
            src={Climate}
            alt="Climate and Environmental"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          {/* Overlay Text */}
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-[#e0c999] px-4 py-2 text-sm uppercase font-bold tracking-wide">
            Climate & Environment
          </div>
        </div>
        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3 text-[#e0c999]">
            Climate and Environmental
          </h2>
          <p className="text-[#e0c999] text-sm mb-5 leading-relaxed text-opacity-80 text-justify">
            Our climate initiatives focus on sustainable practices and
            environmental conservation to protect our planet for future
            generations.
          </p>
          <Link to="/whatwedo#climate">
            <button className="bg-[#e0c999] hover:bg-[#d4b57d] text-[#282936] px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e0c999] focus:ring-offset-2">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
