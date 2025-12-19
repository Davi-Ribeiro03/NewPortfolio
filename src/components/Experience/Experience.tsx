import "./Experience.css";
import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const Experience = () => {
  const cardHeigth = window.screen.width >= 500 ? 260 : 360;

  const experiences = [
    {
      position: "Jovem Aprendiz",
      company: "OSF Digital",
      date: "Dezembro/2022 - Dezembro/2024",
      description: `Trabalhei no Front-end de um software, onde tive oportunidade de
            trabalhar na construção de novas features, correção de bugs,
            refatorações etc. tecnologias: React, javascript, typescript, scss,
            redux, git etc.`,
    },
    {
      position: "Front-end intern",
      company: "OSF Digital",
      date: "Dezembro/2024 - Atualmente",
      description: `Trabalhei no Front-end de um software, onde tive oportunidade de
            trabalhar na construção de novas features, correção de bugs,
            refatorações etc. tecnologias: React, javascript, typescript, scss,
            redux, git etc.`,
    },
  ];

  return (
    <div className="experience">
      <h2>
        My <strong>Experience</strong>
      </h2>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "80%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="line"
      />

      {experiences.map((exp, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: index * 0.5 }}
          viewport={{ once: true }}
          key={index}
          className={`cardExperience ${index % 2 != 0 && "left"}`}
          style={{ marginTop: 20 + index * cardHeigth }}
        >
          <div className="ellipse" />
          <div className="experienceTexts">
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <div className="date">
              <FiCalendar color="#94A3B8" />
              <span>{exp.date}</span>
            </div>
            <p>{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
