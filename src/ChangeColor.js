import React, { useState } from "react";
import colorNames from "colornames";

const ChangeColor = () => {
  // const black = { black };
  // console.log(black)
  // localStorage.setItem("hexvalue", black);

  const [color, setColor] = useState(JSON.parse(localStorage.getItem("color")));
  const [hexvalue, setHexvalue] = useState(
    JSON.parse(localStorage.getItem("hexvalue"))
  );
  const [isDarktext, setIsDarktext] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("hexvalue", JSON.stringify(hexvalue));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          height: "200px",
          width: "200px",
          border: "2px solid black",
          margin: "auto",
          backgroundColor: color,
          color: isDarktext ? "black" : "white",
        }}
      >
        <p>{color ? color : "Empty"}</p>
        <p>{hexvalue ? hexvalue : "null"}</p>
      </div>
      <input
        autoFocus
        type="text"
        placeholder="Change Color"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexvalue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarktext(!isDarktext)}>
        Toggle Textcolor
      </button>
    </form>
  );
};

export default ChangeColor;
