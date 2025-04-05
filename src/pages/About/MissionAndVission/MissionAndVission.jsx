import React, { useRef, useEffect } from "react";
import "./MissionAndVission.css";

const MissionAndVission = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-bottom-normal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      }
    );

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
      ref={scrollRef}
      className="px-4 mt-2 2xl:px-80 lg:px-40 md:px-11 flex flex-col sm:gap-4 sm:flex-row"
    >
      {/* Mission Statement */}
      <div className="fade-in-bottom-normal  sm:w-1/2 sm:h-72 transform transition-all duration-500 ease-in-out ">
        <h2 className="font-bold text-xl text-[#8b0000]">Mission Statement</h2>
        <p className="text-justify mt-2 text-gray-700">
          At The Royal Rock, our mission is to empower individuals with the
          knowledge, skills, and expertise to excel in the field of
          refrigeration and air-conditioning systems and eradicate the rate of
          unemployment in our communities. Through innovative training programs
          and hands-on learning experiences, we strive to foster a highly
          skilled workforce capable of addressing the evolving needs of the
          industry.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="fade-in-bottom-normal   mt-4 sm:mt-0 sm:w-1/2 sm:h-72  transform transition-all duration-500 ease-in-out ">
        <h2 className="font-bold text-xl text-[#8b0000]">Vision Statement</h2>
        <p className="text-justify mt-2 text-gray-700">
          To be a global leader in advancing air-conditioning, health
          solutions, and cool technology for a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default MissionAndVission;