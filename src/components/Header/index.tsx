import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Nome Davi em formato de tag HTML: <Davi/>" />

      <nav className={`desktop  ${menuActive && "mobile"}`}>
        <ul>
          <li>
            {" "}
            <a href="#about" onClick={() => setMenuActive(!menuActive)}>
              About
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#projects" onClick={() => setMenuActive(!menuActive)}>
              Portfolio
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact" onClick={() => setMenuActive(!menuActive)}>
              Contact
            </a>{" "}
          </li>
        </ul>
      </nav>

      <IoMenu
        size={30}
        color="white"
        cursor="pointer"
        className="menuMobile"
        onClick={() => setMenuActive(!menuActive)}
      />
    </div>
  );
};

export default Header;
