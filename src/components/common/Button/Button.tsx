import React from "react";
import "./Button.css";

type ButtonPaddings = "5px 12px" | "10px 32px";

interface ButtonProps {
  title: string;
  padding?: ButtonPaddings;
}

const Button = ({ title, padding }: ButtonProps) => {
  return (
    <a
      href="https://wa.me/5585981721495"
      target="_blank"
      rel="noopener noreferrer"
      className="getInTouchButton"
    >
      <button className="button" style={{ padding: padding }}>
        {title}
      </button>
    </a>
  );
};

export default Button;
