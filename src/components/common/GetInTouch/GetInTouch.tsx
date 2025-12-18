import React from "react";
import "./GetInTouch.css";

type ButtonPaddings = "5px 12px" | "10px 32px";

interface ButtonProps {
  title: string;
  padding?: ButtonPaddings;
}

const GetInTouch = ({ title, padding }: ButtonProps) => {
  return (
    <a
      href="https://wa.me/5585981721495"
      target="_blank"
      rel="noopener noreferrer"
      className="getInTouchButton"
      style={{ padding: padding }}
    >
      {title}
    </a>
  );
};

export default GetInTouch;
