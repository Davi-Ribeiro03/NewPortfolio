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
        <a href="https://github.com/Davi-Ribeiro03" target="_blank" rel="noopener noreferrer">
          <FaGithub {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="https://www.linkedin.com/in/davi-ribeiro-894010232/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="https://wa.me/qr/6XGMCYXZXDMID1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaInstagram {...props} className="redesImg" />
        </a>
      </section>
    </div>
  );
};

export default CardRedesSocias;
