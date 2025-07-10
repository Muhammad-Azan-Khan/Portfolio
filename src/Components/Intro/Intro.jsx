import "./Intro.css";
import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import computer from "../../images/whiteComp.png";
import { motion } from "framer-motion";
import { themeContext } from "../../../Content";
import { useContext } from "react";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="intro">
        <div className="intro-left">
          <div className="intro-name">
            <span
              className="intro-name-first"
              style={{ color: darkMode ? "white" : "" }}
            >
              Hey! I Am
            </span>
            <span className="intro-name-second">Muhammad Azan</span>
            <span className="intro-name-third">
              Front-End Developer with high level of experience in web designing
              and development,producing the Quality work
            </span>
          </div>

          <div className="intro-icons">
            <a href="https://github.com/Muhammad-Azan-Khan">
              <img src={Github} className="icons-adj" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-azan-khan-28b30436b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={LinkedIn} className="icons-adj" alt="" />
            </a>
            <a href="https://www.instagram.com/_azaanyounas?igsh=MWZqc2hpOWFzYmY0aw==">
              <img src={Instagram} className="icons-adj" alt="" />
            </a>
          </div>
        </div>

        <div className="intro-right">
          <motion.img
            src={computer}
            alt=""
            className="computer"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>
    </>
  );
}

export default Intro;
