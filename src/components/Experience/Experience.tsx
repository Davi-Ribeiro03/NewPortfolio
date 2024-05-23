import "./Experience.css";
import ellipse from "../../assets/ellipse.png";
import line from "../../assets/lineExperience.png";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>

      <div className="cardExperience">
        <div className="experienceImages">
          <img src={ellipse} alt="" />
          <img src={line} className="line" alt="" />
        </div>
        <div className="experienceTexts">
          <h3>Jovem aprendiz</h3>
          <h4>OSF, Fortaleza</h4>
          <p>
            Aprendiz na área de desenvolvimento web. Nessa empresa passei por
            treinamentos na área de front end que envolvem Tecnologias como
            HTML, CSS, javascript, typescript, React React Native, nextjs etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
