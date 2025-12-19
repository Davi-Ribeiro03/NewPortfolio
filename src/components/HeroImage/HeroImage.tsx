import { motion } from "framer-motion";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="background-circle"
    >
      <div className="image" />
    </motion.div>
  );
};

export default HeroImage;
