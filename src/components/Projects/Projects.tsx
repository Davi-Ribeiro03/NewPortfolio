import eletronic from "../../assets/eletronic.png";
import gym from "../../assets/gym.png";
import producao from "../../assets/producao.png";
import pokedex from "../../assets/pokedex.png";

import "./Projects.css";
// import { Link } from "react-router-dom";

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
    img: producao,
    url: "",
    name: "Project",
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

      <div className="projectsImg">
        {projetos.map((projeto) => (
          <div className="cardProjectImg">
            <img src={projeto.img} alt="" />
            <div className="projectDescription">
              <p className="name">{projeto.name}</p>
              <p className="description">{projeto.description}</p>
              <a href={projeto.url}>
                <button>See more</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
