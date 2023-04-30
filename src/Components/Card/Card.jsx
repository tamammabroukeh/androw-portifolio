import React from "react";
import "./Card.css";
const Card = ({ emoji, heading, Detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="img" />
      <span>{heading}</span>
      <span>{Detail}</span>
      <button className="card-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
