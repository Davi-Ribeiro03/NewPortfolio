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
  },
  {
    img: gym,
    url: "https://gym-it2y.vercel.app/",
  },
  {
    img: pokedex,
    url: "",
  },
  {
    img: producao,
    url: "",
  },
  {
    img: producao,
    url: "",
  },
  {
    img: producao,
    url: "",
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
              <p className="name">Nome</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
                recusandae libero ullam obcaecati facilis praesentium quod non
                minus.
              </p>
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
