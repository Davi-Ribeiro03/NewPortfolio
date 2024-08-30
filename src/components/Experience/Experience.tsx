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
          <h3>Aprendiz</h3>
          <h4>OSF, Fortaleza</h4>
          <p>
            Trabalhei no Front-end de um software, onde tive oportunidade de
            trabalhar na construção de novas features, correção de bugs,
            refatorações etc. tecnologias: React, javascript, typescript, scss,
            redux, git etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
