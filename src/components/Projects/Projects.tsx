import eletronic from "../../assets/eletronic.png";
import gym from "../../assets/gym.png";
import producao from "../../assets/producao.png";
import pokedex from "../../assets/pokedex.png";
import quiz from "../../assets/quiz.png";
import idak from "../../assets/idak.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import typescript from "../../assets/typescript.png";

import "./Projects.css";
import { motion } from "framer-motion";

const projetos = [
  {
    img: eletronic,
    url: "https://eletronic.vercel.app/",
    name: "Eletronic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex recusandae libero ullam obcaecati facilis praesentium quod non minus.",
  },
  {
    img: gym,
    url: "https://gym-it2y.vercel.app/",
    name: "Gym",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex recusandae libero ullam obcaecati facilis praesentium quod non minus.",
  },
  {
    img: pokedex,
    url: "https://pokedex-react-git-develop-felipebarreto-osfdigital.vercel.app/",
    name: "Pokedex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex recusandae libero ullam obcaecati facilis praesentium quod non minus.",
  },
  {
    img: quiz,
    url: "https://quiz-daviribeiro03s-projects.vercel.app/",
    name: "Quiz",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex recusandae libero ullam obcaecati facilis praesentium quod non minus.",
  },
  {
    img: idak,
    url: "",
    name: "Idak",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex recusandae libero ullam obcaecati facilis praesentium quod non minus.",
  },
  {
    img: producao,
    url: "",
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex recusandae libero ullam obcaecati facilis praesentium quod non minus.",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>

      <div className="containerProjectsImg">
        {projetos.map((projeto, index) => (
          <motion.div
            className="cardProjectImg"
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: index * 0.5 }}
            viewport={{ once: true }}
          >
            <img src={projeto.img} alt="" className="projectImage" />
            <div className="projectDescription">
              <p className="name">{projeto.name}</p>
              <p className="description">{projeto.description}</p>
              <section className="technologies">
                <img src={react} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={typescript} alt="" />
              </section>
              <a href={projeto.url} target="_blank" rel="noopener noreferrer">
                <button>See more</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
