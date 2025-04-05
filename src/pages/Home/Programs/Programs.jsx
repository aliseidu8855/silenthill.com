import React, { useRef, useEffect } from "react";
import "./Programs.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Programs = () => {
  let scroll = useRef();
  const navigate = useNavigate();

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

  const handleReadMore = () => {
    navigate("/whatwedo");
  };

  return (
    <div className="programs-container px-4 2xl:px-80 lg:px-40 md:px-11 mt-8 mb-8">
      <div className="p-header fade-in-bottom-normal">
        <p>Our Programs</p>
        <h2>What We Do</h2>
      </div>
      <div ref={scroll} className="p-cards flex flex-col sm:flex-row gap-6">
        {/* Card 1 */}
        <div className="p-card md:h-[480px] lg:h-[430x]  sm:w-1/2 fade-in-bottom-normal">
          <p className="p-title">Training for a Sustainable Future</p>
          <ul className="desc">
            <li>
              We support our partners with their programs in various areas such
              as refrigeration, hotel management, cooking, food processing,
              security, health training, and family planning. 70% of these are
              women and 30% are men.
            </li>
            <li>
              We empower people with the knowledge and tools to promote
              responsible family planning practices and raise awareness of
              potential health issues.
            </li>
            <li>
              We strive to promote employment opportunities (both local and
              international) for graduates after the training programs to
              provide them with a source of income and livelihood.
            </li>
          </ul>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
          <button className="learn-more mt-4" onClick={handleReadMore}>
            <span className="circle" aria-hidden="true">
              <span className="learn-more-icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-card md:h-[480px] lg:[430px] sm:w-1/2 fade-in-bottom-normal">
          <p className="p-title">
            Health Outreach Program: Improving Access to Healthcare
          </p>
          <ul className="desc">
            <li>
              Initiative: The Royal Rock, in partnership with local health
              organizations, is launching an initiative to extend essential
              healthcare services to underserved rural areas.
            </li>
            <li>
              Focus Areas: This collaborative effort will prioritize primary
              healthcare services, maternal and child health support, disease
              prevention strategies, and comprehensive health education
              initiatives.
            </li>
          </ul>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
          <button className="learn-more mt-4" onClick={handleReadMore}>
            <span className="circle" aria-hidden="true">
              <span className="learn-more-icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
