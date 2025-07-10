import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experiences/Experience";
import WorkExperience from "./Components/WorkExperience/WorkExperience"; // ✅ This is correct
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { themeContext } from "../Content";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />

        <div id="home">
          <Intro />
        </div>

        <div id="work">
          <WorkExperience /> {/* ✅ Fixed this line */}
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
