import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import "./Toogle.css";
import { themeContext } from "../../../Content";
import { useContext } from "react";

function Toogle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toogle" onClick={handleClick}>
      <Moon />
      <Sun />

      <div
        className="toogleButton"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toogle;
