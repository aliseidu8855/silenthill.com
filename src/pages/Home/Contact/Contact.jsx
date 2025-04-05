import React, { useRef, useEffect } from "react";
import "./Contact.css"; // Import the CSS file
import ContactMail from "@mui/icons-material/ContactMail";
import Call from "@mui/icons-material/Call";
import LocationOn from "@mui/icons-material/LocationOn";
import Mail from "@mui/icons-material/Mail";
import Send from "@mui/icons-material/Send";

const Contact = () => {
  const [result, setResult] = React.useState("");
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "602acd1d-a62a-46fb-81ae-1bc97af78fb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container md:grid md:grid-cols-2 md:items-center md:justify-center px-4 2xl:px-80 lg:px-40 md:px-11 mt-8 mb-8">
      <div className="contact-col fade-in-bottom-normal">
        <h2>
          Get in Touch <ContactMail className="contactIcon" />{" "}
        </h2>
        <p>
          Feel free to reach out to us for any inquiries <br /> And learn more
          about our programs
        </p>
        <ul>
          <li>
            <Call className="Icons" />
            (+233) 059 925 8006
          </li>
          <li>
            <LocationOn className="Icons" />
            info@silenthill.com
          </li>
          <li>
            <Mail className="Icons" />
            Cargo Building, P.O. Box KA9009, KIA, <br /> Accra-Ghana
          </li>
        </ul>
      </div>
      <div className="contact-col fade-in-bottom-normal">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send Message <Send />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
