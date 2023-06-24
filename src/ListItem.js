import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            style={
              item.checked
                ? {
                    textDecoration: "line-through",
                  }
                : null
            }
          >
            {item.item}
          </label>
          <FaTrashAlt
            role="button"
            onClick={() => handleDelete(item.id)}
            tabIndex="0"
          />
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
