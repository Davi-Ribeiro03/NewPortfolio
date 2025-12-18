import eletronic from "../../assets/eletronic.png";
import gym from "../../assets/gym.png";
import pokedex from "../../assets/pokedex.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import typescript from "../../assets/typescript.png";
import redux from "../../assets/redux.svg";
import amparo from "../../assets/amparo.png";
import postgres from "../../assets/postgres.png";
import springBoot from "../../assets/spring-boot.png";

import "./Projects.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjetosType {
  id: number;
  img: string;
  url: string;
  name: string;
  description: string;
  technologies: string[];
}

const projetos: ProjetosType[] = [
  {
    id: 0,
    img: eletronic,
    url: "https://eletronic.vercel.app/",
    name: "Eletronic",
    description:
      "Um dos primeiros projeto que desenvolvi para estudar alguns conceitos, como redux com middleware thunk, context, rotas etc. Para acessar o projeto, pode utilizar o usuário:Davi e senha:1234 para usuário comum ou usuário:Lucas e senha:5678 para usuário admin.",
    technologies: [html, css, react, typescript, redux],
  },
  {
    id: 1,
    img: gym,
    url: "https://gym-it2y.vercel.app/",
    name: "Gym",
    description:
      "Landing page simples criada em React. Encontrei esse desgin e decidi recriá-lo, como não tinha o figma, mudei algumas coisas",
    technologies: [html, css, react, typescript],
  },
  {
    id: 2,
    img: pokedex,
    url: "https://pokedex-react-git-develop-felipebarreto-osfdigital.vercel.app/",
    name: "Pokedex",
    description:
      "Primeiro projeto que criei em react e typescript, utilizei uma api já pronta e criei o design do zero. Nesse projeto aprendi técnicas como paginação, rotas, consumo de api com axios etc.",
    technologies: [html, css, react, typescript, redux],
  },
  {
    id: 3,
    img: amparo,
    url: "https://github.com/Davi-Ribeiro03/Amparo",
    name: "Amparo",
    description:
      "Aplicativo full stack em desenvolvimento para ajudar cuidadores de idosos a gereciar os remédios que os idosos precisam tomar. Esse aplicativo conta também com um assistente com inteligência artificial para tirar dúvidas.",
    technologies: [react, typescript, postgres, springBoot],
  },
];

const Projects = () => {
  const [projetosMobile, setProjetosMobile] = useState<ProjetosType[]>([]);

  useEffect(() => {
    if (window.innerWidth < 820) {
      setProjetosMobile(projetos.filter((projeto) => projeto.id < 2));
    } else {
      setProjetosMobile(projetos);
    }
  }, []);

  function acrescentaProjectsMobile() {
    setProjetosMobile(
      projetos.filter((projeto) => projeto.id < projetosMobile?.length + 2)
    );
  }

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>

      <div className="containerProjects">
        {projetosMobile?.map((projeto, index) => (
          <motion.div
            className="cardProject"
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={projeto.img} alt="" className="projectImage" />
            <div className="projectDescription">
              <p className="name">{projeto.name}</p>
              <p className="description">{projeto.description}</p>
              <section className="technologies">
                {projeto.technologies.map((tech, index) => (
                  <img src={tech} alt="" key={index} />
                ))}
              </section>
              <div className="buttons">
                <a href={projeto.url} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={acrescentaProjectsMobile}
        className={
          projetos.length > projetosMobile?.length
            ? "buttonVisible"
            : "buttonHidden"
        }
      >
        See more Projects
      </button>
    </div>
  );
};

export default Projects;
