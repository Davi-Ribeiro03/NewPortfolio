import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
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
        <a href="">
          <FaFacebook {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a
          href="
        "
        >
          <FaLinkedinIn {...props} className="redesImg" />
        </a>
      </section>

      <section className="imgs">
        <a href="">
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
