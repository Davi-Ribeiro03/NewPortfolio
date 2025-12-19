import { useState, useEffect } from "react";
import "./Header.css";
import { IoMenu, IoClose } from "react-icons/io5";
import GetInTouch from "../common/GetInTouch/GetInTouch";

const navlinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeHref, setActiveHref] = useState(navlinks[0].href);

  const updateActive = () => {
    const headerOffset = 80;
    let closest = navlinks[0].href;
    let closestDistance = Infinity;

    navlinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (!el) return;
      const d = Math.abs(
        (el as HTMLElement).getBoundingClientRect().top - headerOffset
      );
      if (d < closestDistance) {
        closestDistance = d;
        closest = link.href;
      }
    });

    setActiveHref(closest);
  };

  const handleClickNavLink = (href?: string) => {
    const isMobile = window.innerWidth <= 845;
    if (href) setActiveHref(href);
    if (isMobile) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

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
            <li
              key={index}
              className={activeHref === item.href ? "active" : ""}
            >
              <a href={item.href} onClick={() => handleClickNavLink(item.href)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <GetInTouch title="Entrar em contato" padding="10px 32px" />

      <div className="menuIcon">
        {menuActive ? (
          <IoClose
            size={30}
            color="white"
            cursor="pointer"
            className="menuMobile"
            onClick={() => setMenuActive(false)}
          />
        ) : (
          <IoMenu
            size={30}
            color="white"
            cursor="pointer"
            className="menuMobile"
            onClick={() => setMenuActive(true)}
          />
        )}
      </div>

      <div className={`mobileMenu ${menuActive ? "open" : ""}`}>
        <div className="mobileMenuInner">
          <ul>
            {navlinks.map((item, index) => (
              <li
                key={index}
                className={activeHref === item.href ? "active" : ""}
              >
                <a
                  href={item.href}
                  onClick={() => handleClickNavLink(item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="contactBtn"
            onClick={() => handleClickNavLink("#contact")}
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
