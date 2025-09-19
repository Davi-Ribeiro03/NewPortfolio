import { motion } from "framer-motion";
import "./CardSkills.css";

const CardSkills = ({
  img,
  name,
  index,
}: {
  img: string;
  name: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: index * 0.01 }}
      viewport={{ once: true }}
      className="cardSkills"
    >
      <img src={img} alt="" />
      <p>{name}</p>
    </motion.div>
  );
};

export default CardSkills;
