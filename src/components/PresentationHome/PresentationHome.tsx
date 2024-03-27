import {motion} from "framer-motion"

import "./presentationHome.css";
import Robo from "../../assets/robo.png";
import CardRedesSocias from "../CardRedesSociais/CardRedesSocias";

const PresentationHome = () => {
  return (
    <div className="presentationHome">
      <motion.section
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
      >
        <h2>
          I’ M <strong>Davi Ribeiro </strong>
          Front end Developer
        </h2>

        <a href="#contact">
          <button> Contact me</button>
        </a>

        <CardRedesSocias />
      </motion.section>

      <motion.img 
        initial={{opacity:0, y:100}} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="roboImg" src={Robo} alt="" />
    </div>
  );
};

export default PresentationHome;
