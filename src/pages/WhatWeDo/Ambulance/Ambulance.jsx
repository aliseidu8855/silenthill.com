import React, { useRef, useEffect } from "react";
import "./Ambulance.css";
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

// Import images (replace with your actual image paths)
import Ambulance1 from "../../../assets/images/gallery/air_ambulance.webp";
import Ambulance2 from "../../../assets/images/airplane2.webp";
import Ambulance3 from "../../../assets/images/airplane3.webp";
import Ambulance5 from "../../../assets/images/airplane5.webp";

const Ambulance = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

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
  const allImages = [
    Ambulance1,
    Ambulance2,
    Ambulance3,
    Ambulance5,
  ];

  return (
    <div className="gap-6 mx-2 px-4 mt-6 mb-2 2xl:px-80 lg:px-40 md:px-11">
      {/* Project Overview */}
      <div className="project-overview mb-8 animate-on-scroll">
        <p className="text-gray-700 text-justify mb-4 leading-relaxed">
          Our mission is to bring essential services to underserved communities
          through innovative and sustainable projects. From emergency healthcare
          to education and technology training, every initiative aims to empower
          individuals and transform lives.
        </p>
        <p className="text-gray-700 text-justify leading-relaxed">
          The Emergency Ambulance project is one of our core initiatives,
          focusing on providing life-saving transportation for critical cases.
          With your support, we can make a meaningful difference in the lives of
          those in need.
        </p>
      </div>

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
          modules={[Autoplay, Pagination]}
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
      <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            heading: "Emergency Ambulance",
            items: [
              "In regions with limited access to medical facilities or where ground transportation can take too long, this air ambulance will make a huge difference. It will allow us to quickly transport patients from remote or underserved areas to hospitals that can provide the necessary treatment.",
              "The need for fast, safe, and reliable transportation is more urgent than ever. With your generous donation, we can make this vital service a reality and ensure that people in need receive the treatment they deserve as quickly as possible.",
            ],
          },
          {
            heading: "How Your Donation Helps",
            items: [
              "$50 - Enables us to purchase essential medical equipment for a flight.",
              "$100 - Helps refuel the aircraft for a life-saving mission.",
              "$500 - Supports a complete flight to transfer a patient in critical condition.",
              "$1,000+ - Sponsors a life-saving flight.",
            ],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="t-card fade-in-bottom-normal rounded-lg animate-on-scroll"
          >
            {/* Project Content */}
            <h2 className="font-bold text-2xl text-[#8b0000] mb-6">
              {item.heading}
            </h2>
            <ul className="flex flex-col gap-4 text-justify">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed">
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

export default Ambulance;
