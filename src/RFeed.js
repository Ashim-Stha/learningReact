import React from "react";
import RPost from "./RPost";

const RFeed = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <RPost key={post.id} post={post} />
      ))}
    </main>
  );
};

export default RFeed;
