import React, { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("Ashim");
  const [count, setCount] = useState(0);

  const handleName = () => {
    const name = ["Ashim", "Kev", "Bob"];
    const num = Math.floor(Math.random() * 3);
    setName(name[num]);
  };

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Welcome {name}
      <button onClick={handleName}>Change Name</button>
      Count: {count}
      <button onClick={handleCount}>Increase Count</button>
    </div>
  );
};

export default Hello;
