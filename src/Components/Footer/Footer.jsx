import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave.png";
export const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Wave" />
      <div className="footer-content">
        <span>androw146@gmail.com</span>
        <div className="footer-icons">
          <Insta className="icon" />
          <Facebook className="icon" />
          <Github className="icon" />
        </div>
      </div>
    </div>
  );
};
