import React, { useRef, useEffect } from "react";
import "./Testimonials.css"; // Import the CSS file
import logo from "../../../assets/images/The-Royal-Rock-Logo.webp";

const Testimonials = () => {
  let scroll = useRef();

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

  return (
    <div className="testimonials-container px-4 2xl:px-80 lg:px-40 md:px-11 mt-8 mb-8">
      <div className="testimonials-header fade-in-bottom-normal">
        <p>Success Stories</p>
        <h2>Testimonials and Feedback</h2>
      </div>
      <div className="testimonials-list">
        {/* Testimonial 1 */}
        <div className="testimonial-card fade-in-bottom-normal">
          <p className="testimonial-text">
            &quot; The air-conditioning and refrigeration training provided by
            The Royal Rock Foundation has been truly transformative for our team.
            The comprehensive curriculum and hands-on training approach have
            equipped us with the skills and knowledge needed to excel in our
            field. &quot;
          </p>
          <h4 className="testimonial-author">Client Testimonial</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card fade-in-bottom-normal">
          <p className="testimonial-text">
            &quot; Working with The Royal Rock on health outreach programs has
            been transformative for our organization. Together, we have reached
            remote communities and made a tangible impact on improving healthcare
            access and outcomes. &quot;
          </p>
          <h4 className="testimonial-author">Partner Feedback</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
