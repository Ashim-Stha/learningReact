import React from "react";

const RouterFooter = () => {
  const date = new Date();
  return (
    <footer
      style={{
        display: "grid",
        placeContent: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      Copyright &copy; {date.getFullYear()}
    </footer>
  );
};

export default RouterFooter;
