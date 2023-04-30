import React from "react";
import "./Intro.css";
import instagram from "../../img/instagram.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Thumbup from "../../img/thumbup.png";
import GlassesImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";
export const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work
          </span>
        </div>
        <button className="intro-button button">Hire me</button>
        <div className="intro-icons">
          <a href="#">
            <img src={github} alt="Github" />
          </a>
          <a href="#">
            <img src={instagram} alt="Github" />
          </a>
          <a href="#">
            <img src={linkedin} alt="Github" />
          </a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={Boy} alt="Boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesImoji}
          alt="GlassesImoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1f5ff",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
            top: "17rem",
          }}
        ></div>
      </div>
    </div>
  );
};
