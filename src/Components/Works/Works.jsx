import React from "react";
import "./Works.css";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";
import { motion } from "framer-motion";
import Shopify from "../../img/Shopify.png";
import { useContext } from "react";
import { themeContext } from "../../Context/Context";
export const Works = () => {
  const theme = useContext(themeContext);
  const transition = { duration: 3.5, type: "spring" };
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          <br />
          saepe mollitia consectetur commodi cum quaerat voluptatum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nam.
          <br />
          saepe mollitia consectetur commodi cum quaerat voluptatum.
        </span>
        <button className="button services-button">Hire me</button>
        <div
          className="blur services-blur1"
          style={{ background: "#abf1ff94" }}
        ></div>
      </div>
      {/*Right Side*/}
      <div className="circle-side">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transition}
          className="mainCircle"
        >
          <div className="secondCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="secondCircle">
            <img src={Fiverr} alt="Upwork" />
          </div>
          <div className="secondCircle">
            <img src={Amazon} alt="Upwork" />
          </div>
          <div className="secondCircle">
            <img src={Shopify} alt="Upwork" />
          </div>
          <div className="secondCircle">
            <img src={Facebook} alt="Upwork" />
          </div>
        </motion.div>
        <div className="backgroundCircle blueCircle"></div>
        <div className="backgroundCircle yellowCircle"></div>
      </div>
    </div>
  );
};
