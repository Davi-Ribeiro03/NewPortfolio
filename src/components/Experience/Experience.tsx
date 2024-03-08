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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
            molestias expedita aperiam assumenda quod magni iste. Fugiat ipsam,
            recusandae omnis ratione perspiciatis impedit in! Officia modi ex
            praesentium sequi.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minus ipsa molestias expedita aperiam assumenda quod magni
            iste. Fugiat ipsam, recusandae omnis ratione perspiciatis impedit
            in! Officia modi ex praesentium sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
