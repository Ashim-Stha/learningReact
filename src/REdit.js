import React from "react";
import { useParams } from "react-router-dom";

const REdit = ({
  editBody,
  editTitle,
  setEditBody,
  setEditTitle,
  posts,
  handleEdit,
}) => {
  const { id } = useParams();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="editTitle"></label>
      <input
        type="text"
        id="editTitle"
        placeholder="Edit title"
        required
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />

      <label htmlFor="editBody"></label>
      <textarea
        id="editBody"
        cols="30"
        rows="10"
        placeholder="Edit body"
        required
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}
      ></textarea>

      <button type="button" onClick={() => handleEdit(id.toString())}>
        Submit
      </button>
    </form>
  );
};

export default REdit;
