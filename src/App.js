import React from "react";
import RouterHeader from "./RouterHeader";
import RouterNav from "./RouterNav";
import RouterFooter from "./RouterFooter";
import RouterHome from "./RouterHome";
import RouterNewPost from "./RouterNewPost";
import RouterPostPage from "./RouterPostPage";
import RouterAbout from "./RouterAbout";
import RouterMissing from "./RouterMissing";
import REdit from "./REdit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./api/posts";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title: "My First Post",
    //   datetime: "July 01, 2021 11:17:36 AM",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    // },
    // {
    //   id: 2,
    //   title: "My 2nd Post",
    //   datetime: "July 01, 2021 11:17:36 AM",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    // },
    // {
    //   id: 3,
    //   title: "My 3rd Post",
    //   datetime: "July 01, 2021 11:17:36 AM",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    // },
    // {
    //   id: 4,
    //   title: "My Fourth Post",
    //   datetime: "July 01, 2021 11:17:36 AM",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    // },
  ]);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const newPost = posts.filter((post) => post.id !== id);
      setPosts(newPost);
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    // const len = posts.length - 1;
    // const newID = posts[len].id + 1;
    // console.log(newID);
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };

    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get("/posts");

        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          //Not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    };

    fetchPost();
  }, []);
  useEffect(() => {
    const searchposts = posts.filter(
      (post) =>
        (post.body && post.body.toLowerCase().includes(search.toLowerCase())) ||
        (post.title && post.title.toLowerCase().includes(search.toLowerCase()))
    );
    setSearchResults(searchposts.reverse());
  }, [posts, search]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    const editPost = posts.filter((post) => post.id == id);
    const newPost = {
      id: id,
      title: editTitle,
      datetime: datetime,
      body: editBody,
    };
    const response = await api.put(`/edit/${id}`, newPost);
    setPosts(response.data);
    // const response = api.put(`/edit/${id}`,)
  };
  return (
    <Router>
      <div>
        <RouterHeader content="React Blog" />
        <RouterNav search={search} setSearch={setSearch} />

        <Routes>
          <Route
            exact
            path="/"
            element={<RouterHome posts={searchResults} />}
          />
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
          <Route
            exact
            path="/edit/:id"
            element={
              <REdit
                editBody={editBody}
                setEditBody={setEditBody}
                setEditTitle={setEditTitle}
                editTitle={editTitle}
                posts={posts}
                handleEdit={handleEdit}
              />
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
