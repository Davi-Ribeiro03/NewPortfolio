import projeto from "../../assets/projeto.png";
import "./Projects.css";

const projetos = [
  {
    img: projeto,
  },
  {
    img: projeto,
  },
  {
    img: projeto,
  },
  {
    img: projeto,
  },
  {
    img: projeto,
  },
  {
    img: projeto,
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
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
