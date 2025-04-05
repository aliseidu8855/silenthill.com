import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import About from "./About/About";
import Title from "../../components/Title/Title";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import hero2 from "../../assets/images/silenthill2.webp";
import hero3 from "../../assets/images/silenthill3.webp";
import hero4 from "../../assets/images/silenthill4.webp";
import hero5 from "../../assets/images/silenthill5.webp";
import hero6 from "../../assets/images/airplane2.webp";
import hero7 from "../../assets/images/airplane3.webp";
import photo from "../../assets/images/hero6.webp";
import { useLocation } from "react-router-dom";
import useScrollToSection from "../../components/SectionScroll/useScrollToSection";

const Home = () => {
  const location = useLocation();
  useScrollToSection(180);

  const images = [hero2, hero6, hero4, hero7, hero3, hero5];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Hero
        header="Empowering Communities Through Innovation"
        subheader="At Silent Hill Foundation, we are passionate about creating sustainable solutions that uplift and empower communities.
    Our mission is to drive innovation, provide health resources, and support transformative projects that bring real and lasting change to people's lives.
Together, we can bridge the gap between potential and opportunity by equipping individuals with the skills, tools, and knowledge they need to succeed.
    From training programs and health initiatives to community outreach, every effort we make is a step toward a stronger, more resilient future.
Become part of a movement that’s changing lives and shaping the future for generations to come. Together, we can make a difference."
        images={images}
      />
      <About />
      <Title title="Our Project" />
      <Projects />
      <section
        style={{ backgroundImage: `url(${photo})` }}
        className="bg-cover bg-center"
      >
        {/* <Programs /> */}
      </section>
      <Title subTitle="Contact Us" title="Get in Touch" />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
