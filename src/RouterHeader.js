import React from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
const RouterHeader = ({ content, width }) => {
  return (
    <header>
      {content}
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default RouterHeader;
