import "./Skills.css";
import CardSkills from "../CardSkills/CardSkills";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import ts from "../../assets/typescript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import figma from "../../assets/figma.png";
import next from "../../assets/next.png";

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
    img: figma,
    name: "Figma",
  },
  {
    img: next,
    name: "Next",
  },
];

const Skills = () => {
  return (
    <div className="skills">
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
