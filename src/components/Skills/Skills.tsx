import "./Skills.css";
import CardSkills from "../common/CardSkills/CardSkills";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import ts from "../../assets/typescript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import postgres from "../../assets/postgres.png";

const skillsLanguages = [
  {
    img: js,
    name: "Javascript",
  },
  {
    img: react,
    name: "React",
  },
  {
    img: ts,
    name: "Typescript",
  },
  {
    img: css,
    name: "Css",
  },
  {
    img: html,
    name: "Html",
  },
  {
    img: react,
    name: "React Native",
  },
  {
    img: node,
    name: "NodeJs",
  },
  {
    img: postgres,
    name: "Postgres",
  },
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="skillsTitle">My Skills</h2>
      <div className="containerSkills">
        {skillsLanguages.map(
          (skill: { img: string; name: string }, index: number) => (
            <CardSkills {...skill} index={index} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
