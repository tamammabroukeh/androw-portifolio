import React from "react";
import "./Portifolio.css";
import Ecommerce from "../../img/ecommerce.png";
import Sidebar from "../../img/sidebar.png";
import Musicapp from "../../img/musicapp.png";
import Hoc from "../../img/hoc.png";
import project1 from "../../img/project-img1.png";
import project2 from "../../img/project-img2.png";
import project3 from "../../img/project-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { themeContext } from "../../Context/Context";
import "swiper/css";
export const Portifolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portifolio" id="Portifolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portifolio</span>
      <Swiper
        grabCursor={true}
        spaceBetween={3}
        slidesPerView={3}
        className="portifolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Musicapp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
