import React from "react";
import "./card.css";

const Card = ({ name, age }) => {
  return (
    <div className="card_wrap">
      <div className="container">
        <h1>{name}</h1>
      </div>

      <div className="container">
        <p>age:{age}</p>
      </div>
    </div>
  );
};

export default Card;
