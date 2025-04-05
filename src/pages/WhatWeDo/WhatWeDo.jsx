import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import hero2 from "../../assets/images/silenthill2.webp";
import hero3 from "../../assets/images/silenthill3.webp";
import hero4 from "../../assets/images/silenthill4.webp";
import hero5 from "../../assets/images/silenthill5.webp";
import hero6 from "../../assets/images/airplane2.webp";
import hero7 from "../../assets/images/airplane3.webp";
import useScrollToSection from "../../components/SectionScroll/useScrollToSection";
import Climate from "./Climate/Climate";
import Ambulance from "./Ambulance/Ambulance";

const WhatWeDo = () => {
  const location = useLocation();
  useScrollToSection(180);
  const images = [hero2, hero6, hero4, hero7, hero3, hero5];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  return (
    <div>
      <Hero
        header="Our Projects"
        subheader="At Silent Hill Foundation, we believe in the power of action. Our projects are designed to address critical needs in underserved communities, from healthcare and education to environmental sustainability.

  Explore our initiatives and see how we are making a difference. From emergency ambulance services and health outreach programs to climate action and educational empowerment, every project is a step toward a better future.

  Join us in our mission to create sustainable change and empower communities worldwide."
        images={images}
      />
      <div>
        {/* Emergency Ambulance Section */}
        <Title
          title="Emergency Air Ambulance Services"
          subTitle="Providing Life-Saving Transportation for Critical Cases"
        />
        <section id="emergency-ambulance">
          <Ambulance />
        </section>

        {/* Climate and Environmental Initiatives Section */}
        <Title
          title="Climate and Environmental Initiatives"
          subTitle="Promoting Sustainable Practices for a Greener Future"
        />
        <section id="climate">
          <Climate />
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
