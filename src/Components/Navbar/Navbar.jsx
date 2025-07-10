import "./Navbar.css";
import { navItems } from "../../constants";
import Toogle from "../ToogleButton/Toogle";
import { Link } from "react-scroll";
import { themeContext } from "../../../Content";
import { useContext } from "react";

function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="navbar-main "
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="navbar-leftSide">
        <div className="navbar-name">Azaan</div>
        <Toogle />
      </div>

      <div className="navbar-rightSide">
        <div className="navbar-list">
          <ul className="navbar-itemsList">
            {navItems.map((navLink, index) => (
              <li key={index}>
                <Link
                  to={navLink.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="navbar-link"
                >
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
          <button className="navbar-button button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
