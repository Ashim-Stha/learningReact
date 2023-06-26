import React from "react";
import { Link } from "react-router-dom";

const RList = ({ posts }) => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/post">NewPosts</Link>
      </li>
    </>
  );
};

export default RList;
