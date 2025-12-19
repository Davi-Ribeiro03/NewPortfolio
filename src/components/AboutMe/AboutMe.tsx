import "./AboutMe.css";
import aboutMeImage from "../../assets/about-me-image.png";
import { motion } from "framer-motion";
import GetInTouch from "../common/GetInTouch/GetInTouch";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about-image">
        <motion.img
          src={aboutMeImage}
          className="about-me-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="about-me-text">
        <h2 className="aboutTitle">
          About <strong>Me</strong>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="separator"
        />
        <section className="aboutText">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            Sou um desenvolvedor frontend apaixonado, com mais de 3 anos de
            experiência criando experiências digitais que combinam design
            atraente com código funcional. Trabalho com React, Typescript e
            tecnologias web modernas. Minha jornada no desenvolvimento web
            começou durante meus estudos de ciência da computação, onde descobri
            meu amor por criar interfaces de usuário interativas. Estou
            constantemente aprendendo novas tecnologias e me mantendo atualizado
            com as últimas tendências do setor. Acredito em escrever código
            limpo e de fácil manutenção e em criar aplicativos com os quais os
            usuários adoram interagir.
          </motion.p>
        </section>
        <GetInTouch title="Entrar em contato" padding="10px 32px" />
      </div>
    </div>
  );
};

export default AboutMe;
