import React from "react";
import RList from "./RList";

const RouterNav = ({ search, setSearch, posts }) => {
  return (
    <nav>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Search">Search Posts:</label>
        <input
          type="text"
          id="Search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul>
        {/* {posts.map((post) => (
          <RList key={posts.id} post={post} />
        ))} */}
        <RList posts={posts} />
      </ul>
    </nav>
  );
};

export default RouterNav;
