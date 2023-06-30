import React from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const RouterHeader = ({ content }) => {
  const { width } = useContext(DataContext);
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
