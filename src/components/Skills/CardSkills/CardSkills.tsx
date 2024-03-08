import React from "react";
import "./CardSkills.css";

const CardSkills = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="cardSkills">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default CardSkills;
