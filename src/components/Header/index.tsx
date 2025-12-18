import { useState } from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import Button from "../common/Button/Button";

const navlinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClickNavLink = () => {
    const isMobile = window.innerWidth <= 845;
    if (!isMobile) return setMenuActive((prev) => !prev);
  };

  return (
    <div className="header">
      <h2 className="logo">
        <span>{"<"}</span>
        Davi
        <span>{"/>"}</span>
      </h2>

      <nav className={`desktop ${menuActive ? "mobile" : ""}`}>
        <ul>
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={handleClickNavLink}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button title="Entrar em contato" padding="5px 12px" />

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
