import React, { useState } from "react";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import ApiRequest from "./ApiRequest";

function FormIn({ items, setItems, saveLocalstorage, API_URL, setfetchError }) {
  const [newItem, setnewItem] = useState("");
  const inputRef = useRef();

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const arr = [...items, myNewItem];
    setItems(arr);
    saveLocalstorage(arr);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await ApiRequest(API_URL, postOptions);
    if (result) setfetchError(result);
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
          ref={inputRef}
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
