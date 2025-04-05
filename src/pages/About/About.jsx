import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import Hero from "../../components/Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import BoardMembers from "./BoardMembers/BoardMembers";
import Responsibilities from "./Responsibilities/Responsibilities";
import hero2 from "../../assets/images/silenthill2.webp";
import hero3 from "../../assets/images/silenthill3.webp";
import hero4 from "../../assets/images/silenthill4.webp";
import hero5 from "../../assets/images/silenthill5.webp";
import hero6 from "../../assets/images/airplane2.webp";
import hero7 from "../../assets/images/airplane3.webp";
import MissionAndVission from "./MissionAndVission/MissionAndVission";
import useScrollToSection from "../../components/SectionScroll/useScrollToSection";

const AboutPage = () => {
  const location = useLocation();
  useScrollToSection(100);
  const images = [hero2, hero6, hero4, hero7, hero3, hero5];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Hero
        header="About Silent Hill Foundation"
        subheader="The Silent Hill Foundation was founded with a vision to create a world where every individual has the opportunity to thrive. Through innovation, education, and community-driven initiatives, we are committed to making a lasting impact.

  Our team is dedicated to addressing the most pressing challenges faced by underserved communities. From healthcare and education to environmental sustainability, we work tirelessly to empower individuals and build resilient communities.

  Join us in our mission to create a brighter future for all. Together, we can inspire change and transform lives."
        images={images}
      />
      <div>
        <Title subTitle="Silent Hill Foundation" title="About Us" />
        <AboutUs />
        <Title
          subTitle="Silent Hill Foundation"
          title="Our Mission And Vission"
        />
        <MissionAndVission />
        <Title subTitle="Silent Hill Foundation" title="Board Members" />
        <BoardMembers />
        <Title
          subTitle="Silent Hill Foundation"
          title="Board Member Responsibilities"
        />
        <Responsibilities />
      </div>
    </div>
  );
};

export default AboutPage;
