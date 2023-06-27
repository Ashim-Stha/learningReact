import React from "react";
import { Link } from "react-router-dom";
const RouterMissing = () => {
  return (
    <main>
      <h3>Not Found</h3>
      <Link to="/">Visit homepage</Link>
    </main>
  );
};

export default RouterMissing;
