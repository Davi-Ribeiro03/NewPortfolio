import "./AboutMe.css";
import aboutMeImg from "../../assets/animation.webp";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <h2 className="aboutTitle">About me</h2>
      <section className="aboutText">
        <motion.img
          src={aboutMeImg}
          className="aboutMeImg"
          initial={{ opacity: 0.6, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Sou um apaixonado estudante de Ciência da Computação, dedicado a
          explorar os mistérios da tecnologia. Especializando-se em front-end,
          procuro transformar conceitos em experiências digitais cativantes.
          Minha jornada é marcada por uma busca incessante por conhecimento e
          uma habilidade inata de transformar ideias em realidade.
        </motion.p>
      </section>
    </div>
  );
};

export default AboutMe;
