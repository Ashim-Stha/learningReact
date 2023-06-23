import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "hahah",
    },
    {
      id: 2,
      checked: false,
      item: "blabla",
    },
    {
      id: 3,
      checked: false,
      item: "hello",
    },
  ]);

  const handleChange = (id) => {
    // console.log(id);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              onChange={() => handleChange(item.id)}
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
    </div>
  );
};

export default Content;
