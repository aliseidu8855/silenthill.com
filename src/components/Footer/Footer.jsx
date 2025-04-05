import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer md:grid md:grid-cols-2 md:items-center md:justify-center px-4 py-8 2xl:px-80 lg:px-40 md:px-11">
      {" "}
      <p className="text-[#e0c999]">
        © 2025 Silent Hill. All rights reserved.
      </p>
      <ul>
        <li className="text-[#e0c999]">Terms of Services</li>
        <div className="footer__divider text-[#e0c999]"></div>
        <li className="text-[#e0c999]">Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
