import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function FormIn({ items, setItems, saveLocalstorage }) {
  const [newItem, setnewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const arr = [...items, myNewItem];
    setItems(arr);
    saveLocalstorage(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);

    setnewItem("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          autoFocus
          type="text"
          id="addItem"
          required
          placeholder="Add Item"
          value={newItem}
          onChange={(e) => setnewItem(e.target.value)}
        />
        <button type="submit" aria-label="addItem">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

export default FormIn;
