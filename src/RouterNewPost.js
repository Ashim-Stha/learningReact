import React from "react";
import { useNavigate } from "react-router-dom";

const RouterNewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  return (
    <main>
      <form
        onSubmit={(e) => {
          // (e) => e.preventDefault()
          handleSubmit(e);
          navigate("/");
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="title"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          placeholder="body"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button
          type="submit"
          //   onClick={() => {
          //     handleSubmit();
          //     navigate("/");
          //   }}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default RouterNewPost;
