import React from "react";
import "./header.css";
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs";
function Header({ theme, setTheme }) {
  const style =
    theme == "dark"
      ? {
          fontSize: 13,
          fontWeight: 500,
          color: "white",
        }
      : {
          fontSize: 13,
          fontWeight: 500,
          color: "black",
        };
  const swithTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className='header'>
      <h1>devfinder</h1>
      <div className='mode-switch'>
        <span onClick={swithTheme}>{theme === "light" ? "dark" : "light"}</span>
        {theme === "light" ? (
          <BsMoonFill style={style} />
        ) : (
          <BsFillBrightnessHighFill style={style} />
        )}
      </div>
    </div>
  );
}

export default Header;
