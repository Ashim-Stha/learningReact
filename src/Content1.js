import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ListItem from "./ListItem";

const Content1 = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      {items.length !== 0 ? (
        <ListItem
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default Content1;
