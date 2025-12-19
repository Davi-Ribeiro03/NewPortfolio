import "./GetInTouch.css";

type ButtonPaddings = "5px 12px" | "10px 32px";

interface ButtonProps {
  title: string;
  padding?: ButtonPaddings;
  filled?: boolean;
}

const GetInTouch = ({ title, padding, filled }: ButtonProps) => {
  return (
    <a
      href="https://wa.me/5585981721495"
      target="_blank"
      rel="noopener noreferrer"
      className={`getInTouchButton ${filled && "filled"}`}
      style={{ padding: padding }}
    >
      {title}
    </a>
  );
};

export default GetInTouch;
