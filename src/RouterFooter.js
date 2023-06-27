import React from "react";

const RouterFooter = () => {
  const date = new Date();
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
      }}
    >
      Copyright &copy; {date.getFullYear()}
    </footer>
  );
};

export default RouterFooter;
