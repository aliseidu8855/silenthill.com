import React, { useRef, useEffect } from "react";
import "./HealthOutreachProgram.css";
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

// Import images (replace with your actual image paths)
import Health1 from "../../../assets/images/bed-spaces.webp";
import Health2 from "../../../assets/images/health3.webp";
import Health3 from "../../../assets/images/provita-specialist-hospital.webp";

const HealthOutreachProgram = () => {
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

  // Combine all images into one array for the larger slider
  const allImages = [Health1, Health2, Health3];

  return (
    <div
      ref={scrollRef}
      className="mx-2 px-4 mt-6 mb-2 2xl:px-80 lg:px-40 md:px-11"
    >
      {/* Larger Image Slider */}
      <div className="mb-8 animate-on-scroll">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]} // Removed Navigation
          className="mySwiper"
        >
          {allImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-96 object-cover rounded-lg" // Increased height for larger slider
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            heading: "Project Overview",
            items: [
              "Initiative: Collaboration between The Royal Rock and local health organizations to provide healthcare services in underserved rural areas.",
              "Focus Areas: Primary healthcare, maternal and child health, disease prevention, and health education.",
            ],
          },
          {
            heading: "Challenges Faced",
            items: [
              "Limited Healthcare Infrastructure: Inadequate healthcare facilities and skilled healthcare professionals in remote regions.",
              "Health Education Gap: Lack of awareness and understanding of preventive healthcare practices among community members.",
            ],
          },
          {
            heading: "Solutions Implemented",
            items: [
              "Mobile Health Clinics: Deployment of mobile clinics equipped with medical staff and essential medical supplies to deliver healthcare services directly to communities.",
              "Community Health Workshops: Conduct interactive workshops and awareness campaigns to educate community members on hygiene, nutrition, and disease prevention.",
            ],
          },
          {
            heading: "Successful Outcomes",
            items: [
              "Improved Health Indicators: Reduction in disease prevalence, maternal mortality rates, and child mortality rates in target communities.",
              "Empowered Communities: Increased knowledge and adoption of healthy behaviors, leading to sustainable improvements in health outcomes.",
              "Strengthened Healthcare Systems: Collaboration with local health authorities to strengthen healthcare infrastructure and build capacity for long-term sustainability.",
            ],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="hop-content fade-in-bottom-normal p-6 rounded-lg transform transition-all duration-500 ease-in-out"
          >
            {/* Project Content */}
            <h2 className="font-bold text-xl text-[#8b0000] mb-4">
              {item.heading}
            </h2>
            <ul className="flex flex-col gap-3 text-justify">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="text-gray-700">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthOutreachProgram;
