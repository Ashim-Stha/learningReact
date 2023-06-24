import React, { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState(JSON.parse(localStorage.getItem("color")));
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("color", JSON.stringify(color));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          height: "200px",
          width: "200px",
          border: "2px solid black",
          margin: "auto",
          backgroundColor: `${color}`,
        }}
      >
        {color}
      </div>
      <input
        type="text"
        placeholder="Change Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default ChangeColor;
