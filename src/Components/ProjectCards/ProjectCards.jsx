import "./ProjectCards.css";
import { themeContext } from "../../../Content";
import { useContext } from "react";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
function ProjectCards({ info }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="outer">
      <a href={info.link}>
        <motion.div
          className="projectCards"
          style={{ background: darkMode ? "black" : "" }}
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={info.image}
            className="project-img"
            alt=""
            variants={childVariant}
          />
          <motion.span
            style={{ color: darkMode ? "orange" : "" }}
            variants={childVariant}
          >
            {info.title}
          </motion.span>
          <motion.span
            style={{ color: darkMode ? "white" : "" }}
            variants={childVariant}
          >
            {info.description}
          </motion.span>
        </motion.div>
      </a>
    </div>
  );
}

export default ProjectCards;
