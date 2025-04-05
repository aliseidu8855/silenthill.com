import React, { useRef, useEffect } from "react";
import "./About.css"; // Import the CSS file
import hero from "../../../assets/images/silenthill1.webp";

const About = () => {
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
    <div ref={scroll} className="px-4 2xl:px-80 lg:px-40 md:px-11 mt-2 sm:mt-4">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 fade-in-bottom-normal">
          <img
            src={hero}
            alt="about"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:grayscale transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 fade-in-bottom-normal text-section">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-[#8b0000] mb-4">
            The Silent Hill Foundation
          </h3>
          <h2 className="text-lg sm:text-xl font-bold text-[#282936] mb-4">
            Our Mission
          </h2>
          <p className="text-justify text-sm sm:text-base leading-relaxed sm:leading-loose text-gray-700 mb-4">
            At Silent Hill Foundation, we are more than just an NGO; we are a
            beacon of empowerment, dedicated to revolutionizing communities
            through knowledge and innovation. Founded on the principles of
            compassion and progress, we specialize in three core areas: training
            in refrigeration/air-conditioning, promoting health and population
            control, and fostering safety consciousness.
          </p>
          <p className="text-justify text-sm sm:text-base leading-relaxed sm:leading-loose text-gray-700">
            Our commitment to education is unwavering. Through comprehensive
            training programs, we equip individuals with the skills and
            expertise needed to excel in the dynamic fields of refrigeration and
            air-conditioning. By providing these opportunities free of charge,
            we break down barriers to entry and pave the way for economic
            empowerment and sustainable livelihoods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
