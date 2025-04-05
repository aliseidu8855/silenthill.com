import React, { useRef, useEffect } from "react";
import "./BoardMembers.css";
import Thomas from "../../../assets/images/BoardMembers/Boss.webp";
import Rita from "../../../assets/images/BoardMembers/im5.webp";
import Anthoney from "../../../assets/images/BoardMembers/Anthoney.webp";
import PaaEkow from "../../../assets/images/BoardMembers/Bild-PaaEkow.webp";
import Mathias from "../../../assets/images/BoardMembers/im6.webp";
import SecretaryImage from "../../../assets/images/BoardMembers/Secretary.webp";

const BoardMembers = () => {
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
  return (
    <div
      ref={scrollRef}
      className="m-section  over-hide px-4 2xl:px-80 lg:px-40 md:px-11 fade-in-bottom-normal"
    >
      <div className="custom-container">
        <div className="row justify-center">
          <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
            <div className="m-section mx-auto text-center slider-height-padding">
              <input
                className="m-checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                defaultChecked
              />
              <label htmlFor="slide-1"></label>
              <input
                className="m-checkbox scnd"
                type="radio"
                name="slider"
                id="slider-2"
              />
              <label htmlFor="slider-2"></label>
              <input
                className="m-checkbox thrd"
                type="radio"
                name="slider"
                id="slider-3"
              />
              <label htmlFor="slider-3"></label>
              <input
                className="m-checkbox foth"
                type="radio"
                name="slider"
                id="slider-4"
              />
              <label htmlFor="slider-4"></label>

              <input
                className="m-checkbox Mathias"
                type="radio"
                name="slider"
                id="slider-5"
              />
              <label htmlFor="slider-5"></label>
              <input
                className="m-checkbox Secretary"
                type="radio"
                name="slider"
                id="slider-6"
              />
              <label htmlFor="slider-6"></label>
              <ul>
                <li>
                  <div className="board-member sm:gap-10">
                    <div className="member-info ">
                      <img
                        className="w-[80px] h-[80px] sm:w-[240px] sm:h-[185px]"
                        src={Thomas}
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <h3>Thomas Sky Kpobi LeBlanc </h3>
                        <span>President</span>
                      </div>
                    </div>
                    <p className="hidden sm:block">
                      My name is Thomas Sky Kpobi LeBlanc and I am the husband
                      of Princess NaaDjamah LeBlanc Kpobi. I am the founder of
                      Royal Rock Foundation. My mission is to raise capital for
                      this foundation so that a technical school for
                      refrigeration, air conditioning, catering and hospitality
                      can be established in Accra, as most schools in Accra are
                      not of international standard. Through my father’s
                      upbringing and German virtue, I have the accuracy and
                      straightforwardness to promote education for future
                      generations and lay the foundation for better education. I
                      can proudly say that it is always a pleasure to work with
                      and train Ghanaians.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="board-member sm:gap-10">
                    <div className="member-info">
                      <img
                        className="w-[80px] h-[80px] sm:w-[240px] sm:h-[185px]"
                        src={Rita}
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <h3>Dulcie Rita NaaDjamah LeBlanc Kpobi </h3>
                        <span>Director</span>
                      </div>
                    </div>
                    <p className="hidden sm:block">
                      I am Rita and I have been working in a health system for
                      more than 10 years. My job is to pursue policies aimed at
                      limiting the growth of a population, especially in poor or
                      densely populated parts of the world, through
                      contraception or sterilization programs. In response to
                      the fact that the world’s population would soon outstrip
                      food supplies, a movement to limit the number of births
                      and thus the growth of the world’s population emerged at
                      the beginning of the twentieth century. This is an area I
                      am familiar with and am working on solutions for. This is
                      a responsible task because the world’s resources are not
                      infinite.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="board-member sm:gap-10">
                    <div className="member-info">
                      <img
                        className="w-[80px] h-[80px] sm:w-[240px] sm:h-[240px]"
                        src={Anthoney}
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <h3>Anthoney Nana Kwarteng </h3>
                        <span>Director</span>
                      </div>
                    </div>
                    <p className="hidden sm:block">
                      I have been working in the field of IT technology for many
                      years and it is always a challenge to implement and adapt
                      to the continuous growth of the business market. It takes
                      a high level of responsibility and experience to be able
                      to constantly provide solutions to the IT sector. This
                      work includes not only hardware but also the complete
                      software. My knowledge of the various operating systems
                      means that I am constantly facing up to new challenges.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="board-member sm:gap-10">
                    <div className="member-info">
                      <img
                        className="w-[80px] h-[80px] sm:w-[240px] sm:h-[240px]"
                        src={PaaEkow}
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <h3>Lector PaaEkow Quaye</h3>
                        <span>Member</span>
                      </div>
                    </div>
                    <p className="hidden sm:block">
                      I am a teacher and researcher with 35 years of experience
                      at various universities in California, Canada, Nigeria and
                      Ghana. I teach Communication, Business Administration,
                      Theology and Research Methods as well as Marketing and
                      Public Relations at the Central University Accra. As a
                      Pastor i have the skills to be a Speaker in the Foundation
                      as well.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="board-member sm:gap-10">
                    <div className="member-info">
                      <img
                        className="w-[80px] h-[80px] sm:w-[240px] sm:h-[240px]"
                        src={Mathias}
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <h3>Mathias Jenz</h3>
                        <span>Member</span>
                      </div>
                    </div>
                    <p className="hidden sm:block">
                      My name is Mathias and I have been self-employed for 20
                      years. For 15 years I have been working in the technical
                      field for hospitals in Nigeria, Cameroon and Togo,
                      supplying medical equipment to the surrounding hospitals.
                      This task is a challenge and requires my full
                      concentration. My wife supports me in this program because
                      it is not only demanding but also fun.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="board-member sm:gap-10">
                    <div className="member-info">
                      <img
                        className="w-[80px] h-[80px] sm:w-[240px] sm:h-[185px]"
                        src={SecretaryImage} // Replace with the actual image path
                        alt="Secretary"
                        loading="lazy"
                      />
                      <div>
                        <h3>Margaret</h3>
                        <span>Secretary</span>
                      </div>
                    </div>
                    <p className="hidden sm:block">
                      My name is Margaret, and I am honored to serve as the
                      Secretary of the Royal Rock Foundation. With a background
                      in administration and a passion for community development,
                      I am dedicated to ensuring the smooth operation of the
                      foundation. My role involves managing communications,
                      organizing meetings, and maintaining records to support
                      our mission of providing quality education and vocational
                      training. I believe that education is the key to unlocking
                      potential, and I am committed to contributing to the
                      foundation's vision of empowering future generations in
                      Ghana.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
