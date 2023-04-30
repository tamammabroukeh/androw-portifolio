import React from "react";
import "./Services.css";
import heartEmoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../Context/Context";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          <br />
          saepe mollitia consectetur commodi cum quaerat voluptatum.
        </span>
        <a href={Resume} download>
          <button className="button services-button">Download CV</button>
        </a>
        <div
          className="blur services-blur1"
          style={{ background: "#abf1ff94" }}
        ></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={heartEmoji}
            heading={"Design"}
            Detail={"Figma, Sketch, Photograph, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "36%" }}
          whileInView={{ left: "24%" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            Detail={"Html, Css, Bootstrap, JavaScript, React JS"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            Detail={"Figma, Sketch, Photograph, Adobe, Adobe xd"}
          />
        </motion.div>
        <div
          className="blur services-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
