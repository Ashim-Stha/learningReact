import React from "react";
import RFeed from "./RFeed";

const RouterHome = ({ posts, fetchError, isLoading }) => {
  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {!isLoading && fetchError && (
        <p
          style={{
            color: "red",
          }}
        >
          Error Not Found
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? <RFeed posts={posts} /> : <p>Empty Posts</p>)}
    </main>
  );
};

export default RouterHome;
