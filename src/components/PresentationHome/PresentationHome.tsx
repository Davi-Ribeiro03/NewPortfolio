import "./presentationHome.css";
import Robo from "../../assets/robo.png";
import CardRedesSocias from "../CardRedesSociais/CardRedesSocias";

const PresentationHome = () => {
  return (
    <div className="presentationHome">
      <section>
        <h2>
          I’ M <strong>Davi Ribeiro </strong>
          Front end Developer
        </h2>

        <a href="#contact">
          <button> Contact me</button>
        </a>

        <CardRedesSocias />
      </section>

      <img className="roboImg" src={Robo} alt="" />
    </div>
  );
};

export default PresentationHome;
