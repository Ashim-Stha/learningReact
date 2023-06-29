import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const RouterPostPage = ({ posts, handleDelete, handleEdit }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();
  return (
    <main>
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <button
            type="button"
            onClick={(e) => {
              handleDelete(post.id);
              navigate("/");
            }}
          >
            Delete
          </button>

          <Link to={`/edit/${id}`}>
            <button type="button">Edit</button>
          </Link>
        </article>
      )}

      {!post && (
        <>
          <h2>Oops!</h2>
          <p
            style={{
              color: "red",
            }}
          >
            Not found
          </p>
        </>
      )}
    </main>
  );
};

export default RouterPostPage;
