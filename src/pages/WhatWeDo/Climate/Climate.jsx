import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

// Import images (replace with your actual image paths)
import Climate1 from "../../../assets/images/climate.webp";
import Climate2 from "../../../assets/images/climate2.webp";
import Climate3 from "../../../assets/images/climate3.webp";
import Climate4 from "../../../assets/images/climate4.webp";



const Climate = () => {
  // Combine all images into one array for the larger slider
  const allImages = [Climate1, Climate2, Climate3, Climate4];

  return (
    <div className="mx-2 px-4 mt-6 mb-2 2xl:px-80 lg:px-40 md:px-11">
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

      {/* Climate Overview */}
      <div className="max-w-2xl fade-in-bottom-normal">
        <h2 className="font-bold text-2xl text-[#8b0000]">
          Climate and Environmental Initiatives
        </h2>
        <ul className="flex flex-col gap-3 text-gray-700 mt-2 text-justify">
          <li>
            <span className="font-bold">Mission:</span> To promote sustainable
            practices and environmental conservation to protect our planet for
            future generations.
          </li>
          <li>
            <span className="font-bold">Focus Areas:</span> Renewable energy,
            reforestation, waste management, and climate education.
          </li>
        </ul>
      </div>

      {/* Challenges and Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Challenges */}
        <div className="challenges fade-in-bottom-normal">
          <h2 className="font-bold text-2xl text-[#8b0000]">
            Challenges in Climate
          </h2>
          <ul className="flex flex-col text-gray-700 gap-3 mt-2 text-justify">
            {[
              {
                title: "Deforestation",
                description:
                  "Rapid deforestation is leading to habitat loss, reduced biodiversity, and increased carbon emissions.",
                impact:
                  "Contributes to climate change and disrupts ecosystems.",
              },
              {
                title: "Pollution",
                description:
                  "Air, water, and soil pollution are major environmental issues affecting communities worldwide.",
                impact:
                  "Harms human health, wildlife, and natural resources.",
              },
              {
                title: "Climate Change",
                description:
                  "Rising global temperatures are causing extreme weather events, sea-level rise, and ecosystem disruptions.",
                impact:
                  "Threatens food security, water availability, and livelihoods.",
              },
              {
                title: "Waste Management",
                description:
                  "Improper waste disposal and lack of recycling infrastructure lead to environmental degradation.",
                impact:
                  "Pollutes land and water bodies, harming ecosystems and human health.",
              },
              {
                title: "Energy Consumption",
                description:
                  "Over-reliance on fossil fuels contributes to greenhouse gas emissions and environmental degradation.",
                impact:
                  "Exacerbates climate change and depletes natural resources.",
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
                title: "Reforestation Programs",
                solution:
                  "Planting trees to restore forests, improve biodiversity, and sequester carbon.",
                impact:
                  "Reduces carbon emissions and restores natural habitats.",
              },
              {
                title: "Renewable Energy Projects",
                solution:
                  "Promoting solar, wind, and hydroelectric power to reduce reliance on fossil fuels.",
                impact:
                  "Lowers greenhouse gas emissions and promotes sustainable energy.",
              },
              {
                title: "Waste Management Initiatives",
                solution:
                  "Implementing recycling programs and waste-to-energy projects to reduce landfill waste.",
                impact:
                  "Minimizes pollution and promotes a circular economy.",
              },
              {
                title: "Climate Education Campaigns",
                solution:
                  "Educating communities about climate change and sustainable practices.",
                impact:
                  "Empowers individuals to take action and adopt eco-friendly habits.",
              },
              {
                title: "Community Clean-Up Drives",
                solution:
                  "Organizing local clean-up events to remove litter and restore natural areas.",
                impact:
                  "Improves local environments and fosters community engagement.",
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

export default Climate;
