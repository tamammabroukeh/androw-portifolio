import React from "react";
import "./Testimonials.css";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
export const Testimonials = () => {
  const clients = [
    {
      img: profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum architecto odio debitis perferendis! Inventore maxime magni, cupiditate consequuntur quo nulla soluta",
    },
    {
      img: profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum architecto odio debitis perferendis! Inventore maxime magni, cupiditate consequuntur quo nulla soluta",
    },
    {
      img: profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum architecto odio debitis perferendis! Inventore maxime magni, cupiditate consequuntur quo nulla soluta",
    },
    {
      img: profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum architecto odio debitis perferendis! Inventore maxime magni, cupiditate consequuntur quo nulla soluta",
    },
  ];
  return (
    <div className="testimonials" id="Testimonials">
      <div className="testimonials-heading">
        <span>Clients always get</span>
        <span> Exceptional Work</span>
        <span> from me...</span>
        <div
          className="blur testimonials-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur testimonials-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>
      {/*Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: "true" }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
