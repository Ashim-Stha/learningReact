import React, { useEffect, useState } from "react";

const FetchApiChallengeMod = () => {
  const [reqType, setReqType] = useState("");
  const [items, setItems] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/";
  useEffect(() => {
    const FetchApi = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const result = await response.json();
        console.log(result);
        setItems(JSON.stringify(result));
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchApi();
  }, [reqType]);
  const handleUsers = () => {
    setReqType("users");
  };
  const handlePosts = () => {
    setReqType("posts");
  };

  const handleComments = () => {
    setReqType("comments");
  };
  return (
    <div>
      <button type="button" onClick={handleUsers}>
        Users
      </button>
      <button type="button" onClick={handlePosts}>
        Posts
      </button>
      <button type="button" onClick={handleComments}>
        Comments
      </button>
      {items}
    </div>
  );
};

export default FetchApiChallengeMod;
