import React from "react";
import RFeed from "./RFeed";

const RouterHome = ({ posts }) => {
  return (
    <main>{posts.length ? <RFeed posts={posts} /> : <p>Empty posts</p>}</main>
  );
};

export default RouterHome;
