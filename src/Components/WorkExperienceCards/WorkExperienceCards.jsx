import "./WorkExperienceCards.css";
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
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function WorkExperienceCards({ info }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <motion.div
        className="workExperienceCards"
        style={{ background: darkMode ? "black" : "" }}
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2
          style={{ color: darkMode ? "orange" : "" }}
          variants={childVariant}
        >
          {info.title}
        </motion.h2>

        <motion.ul className="list" variants={parentVariant}>
          <motion.li
            style={{ color: darkMode ? "white" : "" }}
            variants={childVariant}
          >
            {info.text1}
          </motion.li>
          <motion.li
            style={{ color: darkMode ? "white" : "" }}
            variants={childVariant}
          >
            {info.text2}
          </motion.li>
          <motion.li
            style={{ color: darkMode ? "white" : "" }}
            variants={childVariant}
          >
            {info.text3}
          </motion.li>
          <motion.li
            style={{ color: darkMode ? "white" : "" }}
            variants={childVariant}
          >
            {info.text4}
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
}

export default WorkExperienceCards;
