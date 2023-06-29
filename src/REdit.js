import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const REdit = ({
  editBody,
  editTitle,
  setEditBody,
  setEditTitle,
  posts,
  handleEdit,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main>
      {editTitle && (
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

          <button
            type="button"
            onClick={() => {
              handleEdit(id);
              navigate("/");
            }}
          >
            Submit
          </button>
        </form>
      )}

      {!editTitle && (
        <>
          <h3>Not Found</h3>
          <Link to="/">Visit Homepage</Link>
        </>
      )}
    </main>
  );
};

export default REdit;
