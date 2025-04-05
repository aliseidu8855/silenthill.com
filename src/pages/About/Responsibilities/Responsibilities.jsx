import React, { useRef, useEffect } from "react";
import "./Responsibilities.css";

const Responsibilities = () => {
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

  return (
    <div
      ref={scrollRef}
      className="px-4 mt-2 mb-2 2xl:px-80 lg:px-40 md:px-11"
    >
      <h3 className="font-bold text-2xl text-[#8b0000] mb-6 fade-in-bottom-normal">
        Key Responsibilities
      </h3>
      <div className="responsibilities_list">
        <div className="flex flex-wrap mx-2">
          {[
            {
              title: "Fiduciary Duty",
              description:
                "Board members have a fiduciary duty to act in the best interest of the foundation, ensuring responsible stewardship of assets and resources. Making decisions that align with the foundation’s mission and objectives. Monitoring financial performance and ensuring compliance with legal and ethical standards.",
            },
            {
              title: "Strategic Planning",
              description:
                "Participating in the development and oversight of the foundation’s strategic direction. Contributing insights and expertise to strategic planning discussions. Reviewing and approving strategic plans and objectives.",
            },
            {
              title: "Governance Oversight",
              description:
                "Providing oversight of the foundation’s policies, procedures, and performance. Establishing and reviewing governance policies and practices. Monitoring organizational performance and evaluating the effectiveness of governance processes.",
            },
            {
              title: "Risk Management",
              description:
                "Identifying and managing risks that may impact the foundation’s operations or reputation. Assessing potential risks and implementing risk management strategies. Ensuring appropriate safeguards are in place to mitigate risks.",
            },
            {
              title: "Financial Oversight",
              description:
                "Ensuring the financial health and sustainability of the Foundation. Reviewing and approving financial plans, budgets, and financial statements. Monitoring financial performance and ensuring proper fiscal management.",
            },
            {
              title: "Stakeholder Engagement",
              description:
                "Engaging with stakeholders to understand their perspectives and interests. Communicating with stakeholders to solicit feedback and input. Representing the interests of stakeholders in board discussions and decisions.",
            },
            {
              title: "Conclusion",
              description:
                "Board members play a critical role in ensuring effective governance, strategic planning, and oversight of the foundation. Encouraging board members to fulfill their duties with integrity, diligence, and commitment to the organization’s mission and values.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 px-2 mb-4 sm:h-52 fade-in-bottom-normal"
            >
              <div className="p-4  rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105">
                <h4 className="font-bold text-lg text-[#8b0000] mb-2">
                  {item.title}
                </h4>
                <p className="text-justify text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;