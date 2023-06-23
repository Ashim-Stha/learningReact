import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import ListItem from "./ListItem";

const Content1 = ({ items, handleChange, handleDelete }) => {
  return (
    <div>
      {items.length !== 0 ? (
        <ListItem
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default Content1;
