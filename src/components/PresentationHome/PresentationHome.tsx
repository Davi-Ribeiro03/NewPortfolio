import { motion } from "framer-motion";

import "./presentationHome.css";
import CardRedesSocias from "../common/CardRedesSociais/CardRedesSocias";
import HeroImage from "../HeroImage/HeroImage";

const PresentationHome = () => {
  return (
    <div className="presentationHome" id="home">
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h4>WELCOME TO MY PORTFOLIO</h4>
        <h1>
          I’ M <strong>Davi Ribeiro! </strong>
        </h1>
        <h2>Front end Developer</h2>

        <a href="./curriculo.pdf" download className="downloadCV">
          Download CV
        </a>

        <CardRedesSocias />
      </motion.section>

      <HeroImage />
    </div>
  );
};

export default PresentationHome;
