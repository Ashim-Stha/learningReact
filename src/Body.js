import React from "react";

export default function Body() {
  function handleChange() {
    const name = ["Ashim", "Chandrey", "Bob"];
    const num = Math.floor(Math.random() * 3);
    return name[num];
  }

  const handleClick = () => {
    console.log("clicked");
  };

  const handleClick1 = (name) => {
    console.log(`clicked ${name}`);
  };

  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "no-wrap",
      }}
    >
      {/* () in function is called immediately */}
      <p onDoubleClick={handleClick}> Welcome {handleChange()}</p>
      <button onClick={handleClick}>Click</button>
      {/* we can pass arguments like this */}
      <button onClick={() => handleClick1("Ashim")}>Click1</button>{" "}
      <button onClick={handleClick3}>Click2</button>
    </div>
  );
}
