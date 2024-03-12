import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import "./CardRedesSocias.css";

const props = {
  color: "white",
  size: 25,
  cursor: "pointer",
};

const CardRedesSocias = () => {
  return (
    <div className="redes">
      <section className="imgs">
        <a href="https://github.com/Davi-Ribeiro03">
          <FaGithub {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="https://www.linkedin.com/in/davi-ribeiro-894010232/">
          <FaLinkedinIn {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="https://wa.me/qr/6XGMCYXZXDMID1">
          <FaWhatsapp {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="">
          <FaInstagram {...props} className="redesImg" />
        </a>
      </section>
    </div>
  );
};

export default CardRedesSocias;
