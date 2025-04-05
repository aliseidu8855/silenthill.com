import React, { useRef, useEffect } from "react";
import "./Education.css";
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

// Import images (replace with your actual image paths)
import Education2 from "../../../assets/images/education2.webp";
import Education3 from "../../../assets/images/education3.webp";
import Education4 from "../../../assets/images/hero4.webp";
import Education5 from "../../../assets/images/hero11.webp";

const Education = () => {
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
  const allImages = [Education2, Education3, Education4, Education5];

  return (
    <div
      ref={scrollRef}
      className="mx-2 px-4 mt-6 mb-2 2xl:px-80 lg:px-40 md:px-11"
    >
      {/* Larger Image Slider */}
      <div className="mb-8 fade-in-bottom-normal">
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

      {/* Education Overview */}
      <div className="max-w-2xl fade-in-bottom-normal">
        <h2 className="font-bold text-2xl text-[#8b0000]">
          Education Overview
        </h2>
        <ul className="flex flex-col gap-3 text-gray-700 mt-2 text-justify">
          <li>
            <span className="font-bold">Mission:</span> To create accessible and
            inclusive educational opportunities that empower individuals to
            succeed in a rapidly evolving world.
          </li>
          <li>
            <span className="font-bold">Focus Areas:</span> Digital literacy,
            STEM education, teacher training, and lifelong learning programs in
            underserved communities.
          </li>
        </ul>
      </div>

      {/* Challenges and Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Challenges */}
        <div className="challenges fade-in-bottom-normal">
          <h2 className="font-bold text-2xl text-[#8b0000]">
            Challenges in Education
          </h2>
          <ul className="flex flex-col text-gray-700 gap-3 mt-2 text-justify">
            {[
              {
                title: "Limited Access to Technology",
                description:
                  "Many students in rural areas lack access to computers, internet, or digital tools.",
                impact:
                  "This digital divide hampers their ability to compete in the modern job market.",
              },
              {
                title: "Undertrained Teachers",
                description:
                  "Teachers often lack the training to deliver engaging and effective lessons using modern methods.",
                impact:
                  "Leads to lower student engagement and poor educational outcomes.",
              },
              {
                title: "High Dropout Rates",
                description:
                  "Socio-economic challenges force many students to drop out before completing basic education.",
                impact:
                  "Contributes to a cycle of poverty and limited career opportunities.",
              },
              {
                title: "Outdated Curricula",
                description:
                  "Education systems often fail to update curricula to meet the demands of a rapidly changing world.",
                impact:
                  "Leaves students unprepared for the workforce or higher education.",
              },
              {
                title: "Inadequate Infrastructure",
                description:
                  "Schools in underserved areas frequently lack basic facilities like classrooms, libraries, and labs.",
                impact:
                  "Hinders the ability to provide a conducive learning environment.",
              },
            ].map((item, index) => (
              <li key={index} className="mt-2 flex flex-col gap-3">
                <h3 className="font-bold text-lg text-[#8b0000]">
                  {item.title}
                </h3>
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {item.description}
                </p>
                <p>
                  <span className="font-bold">Impact:</span> {item.impact}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="solutions fade-in-bottom-normal">
          <h2 className="font-bold text-2xl text-[#8b0000]">
            Solutions Implemented
          </h2>
          <ul className="flex flex-col text-gray-700 gap-3 mt-2 text-justify">
            {[
              {
                title: "Digital Inclusion Programs",
                solution:
                  "Providing affordable devices and internet access through community partnerships.",
                impact:
                  "Bridges the digital divide and empowers students with essential tech skills.",
              },
              {
                title: "Teacher Development Initiatives",
                solution:
                  "Workshops and certifications to enhance teaching methods and incorporate digital tools.",
                impact: "Improves lesson quality and student engagement.",
              },
              {
                title: "Scholarship Programs",
                solution:
                  "Financial aid to support students at risk of dropping out due to economic hardships.",
                impact:
                  "Reduces dropout rates and promotes educational continuity.",
              },
              {
                title: "Modernized Curricula",
                solution:
                  "Collaboration with industry experts to align curricula with current and future job market needs.",
                impact:
                  "Equips students with relevant skills for higher education and employment.",
              },
              {
                title: "Infrastructure Development",
                solution:
                  "Construction of new classrooms, libraries, and science labs in under-resourced areas.",
                impact:
                  "Creates a better learning environment and fosters academic excellence.",
              },
            ].map((item, index) => (
              <li key={index} className="mt-2 flex flex-col gap-3">
                <h3 className="font-bold text-lg text-[#8b0000]">
                  {item.title}
                </h3>
                <p>
                  <span className="font-bold">Solution:</span> {item.solution}
                </p>
                <p>
                  <span className="font-bold">Impact:</span> {item.impact}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
