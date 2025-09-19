import {motion} from "framer-motion"

import "./presentationHome.css";
import home from "../../assets/home.svg";
import CardRedesSocias from "../common/CardRedesSociais/CardRedesSocias";
import Button from "../common/Button/Button";

const PresentationHome = () => {
  return (
    <div className="presentationHome" id="home">
      <motion.section
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
      >
        <h2>
          I’ M <strong>Davi Ribeiro </strong>
          Front end Developer
        </h2>

        <Button
        title="Entrar em contato"
        padding="5px 32px"
        />

        <CardRedesSocias />
      </motion.section>

      <motion.img 
        initial={{opacity:0, y:100}} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="roboImg" src={home} alt="" />
    </div>
  );
};

export default PresentationHome;
