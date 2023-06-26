import React from "react";
import RouterHeader from "./RouterHeader";
import RouterNav from "./RouterNav";
import RouterFooter from "./RouterFooter";
import RouterHome from "./RouterHome";
import RouterNewPost from "./RouterNewPost";
import RouterPostPage from "./RouterPostPage";
import RouterAbout from "./RouterAbout";
import RouterMissing from "./RouterMissing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleDelete = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    // const len = posts.length - 1;
    // const newID = posts[len].id + 1;
    // console.log(newID);

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = [
      ...posts,
      { id: id, title: postTitle, datetime: datetime, body: postBody },
    ];
    setPosts(newPost);
    setPostTitle("");
    setPostBody("");
  };

  useEffect(() => {
    const handleSearch = () => {
      const searchPosts = posts.filter(
        (post) => post.title.toLowerCase() === search.toLowerCase()
      );
      setPosts(searchPosts);
    };

    handleSearch();
  }, [search]);
  return (
    <Router>
      <div>
        <RouterHeader content="React Blog" />
        <RouterNav search={search} setSearch={setSearch} />

        <Routes>
          <Route exact path="/" element={<RouterHome posts={posts} />} />
          <Route
            exact
            path="/post"
            element={
              <RouterNewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/post/:id"
            element={
              <RouterPostPage posts={posts} handleDelete={handleDelete} />
            }
          />
          <Route path="/about" element={<RouterAbout />} />
          <Route path="*" element={<RouterMissing />} />
        </Routes>

        <RouterFooter />
      </div>
    </Router>
  );
}

export default App;

// npx json-server -p 3500 -w data/db.json
