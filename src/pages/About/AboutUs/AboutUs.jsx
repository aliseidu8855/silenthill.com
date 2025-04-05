import React, { useRef, useEffect } from "react";
import "./AboutUs.css"; // Import the CSS file for animations
import logo from "../../../assets/images/The-Royal-Rock-Logo.webp";

const AboutUs = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-bottom-normal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      },
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
      className="aboutUs flex flex-col px-4 2xl:px-80 lg:px-40 md:px-11 py-8"
    >
      {/* Section 1: Logo and Introduction */}
      <div className="">
        {/* Logo Container with Animation */}

        {/* Text Content with Animation */}
        <div className="leading-6 text-justify text-gray-700 fade-in-bottom-normal text-section">
          <p>
            At The Royal Rock Foundation, we are more than just an NGO; We are a
            beacon of empowerment, dedicated to revolutionizing communities
            through knowledge and innovation. Founded on the principles of
            compassion and progress, we specialize in three core areas: training
            in refrigeration/air-conditioning, promoting health and population
            control, and fostering safety consciousness.
          </p>{" "}
          <br />
          <p>
            Our commitment to education is unwavering. Through comprehensive
            training programs, we equip individuals with the skills and
            expertise needed to excel in the dynamic fields of refrigeration and
            air-conditioning. By providing these opportunities free of charge,
            we break down barriers to entry and pave the way for economic
            empowerment and sustainable livelihoods.
          </p>{" "}
          <br />
        </div>
      </div>

      {/* Section 2: Additional Content with Animation */}
      <div className="fade-in-bottom-normal text-gray-700 text-section">
        <p className="leading-6 text-justify">
          Health and population control are fundamental aspects of our mission.
          Through targeted initiatives and educational campaigns, we strive to
          raise awareness about critical health issues and promote responsible
          family planning practices. By empowering individuals with knowledge
          and resources, we aim to enhance overall well-being and contribute to
          the development of healthier, more resilient communities.
        </p>
        <p className="leading-6 text-justify">
          Safety is paramount in everything we do. Whether it’s ensuring proper
          handling of refrigerants or implementing safety protocols in our
          training facilities, we prioritize the well-being of both our
          beneficiaries and the environment. By instilling a culture of safety
          consciousness, we mitigate risks and empower individuals to create
          safer living and working environments.
        </p>{" "}
        <br />
        <p className="leading-6 text-justify">
          Furthermore, at Royal Rock, we embrace cool technology as a catalyst
          for change. From exploring renewable energy solutions to harnessing
          the power of digital innovation, we are committed to leveraging
          cutting-edge technologies to address pressing global challenges. By
          embracing innovation, we unlock new opportunities for growth,
          sustainability, and social impact.
        </p>{" "}
        <br />
        <p className="leading-6 text-justify">
          In essence, the Royal Rock Foundation is not just an organization; we
          are a community of changemakers dedicated to creating a brighter, more
          sustainable future for all. Join us on our journey as we continue to
          empower individuals, transform communities, and shape a world where
          everyone has the opportunity to thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
