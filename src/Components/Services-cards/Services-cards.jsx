import React from "react";
import "./Services-cards.css";
import { themeContext } from "../../../Content";
import { useContext } from "react";
import { motion } from "framer-motion"; // 👈 Import motion

function ServicesCards({ serviceCard }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <motion.div
        className="card"
        style={{ background: darkMode ? "black" : "" }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={serviceCard.image} alt="" />
        <span style={{ color: darkMode ? "orange" : "" }}>
          {serviceCard.title}
        </span>
        <span style={{ color: darkMode ? "white" : "" }}>
          {serviceCard.description}
        </span>
        <button style={{ background: darkMode ? "black" : "" }}>
          {serviceCard.button}
        </button>
      </motion.div>
    </>
  );
}

export default ServicesCards;
