import React, { useEffect, useState } from "react";
import FormforFetchApi from "./FormforFetchApi";
import ListforFetchApi from "./ListforFetchApi";
import Table from "./Table";
const FetchApiChallengeMod = () => {
  const [reqType, setReqType] = useState("");
  const [items, setItems] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/";
  useEffect(() => {
    const FetchApi = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Not found");
        const result = await response.json();
        // setItems(JSON.stringify(result));
        setItems(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchApi();
  }, [reqType]);

  return (
    // <div>
    //   <button type="button" onClick={() => setReqType("users")}>
    //     Users
    //   </button>
    //   <button type="button" onClick={() => setReqType("posts")}>
    //     Posts
    //   </button>
    //   <button type="button" onClick={() => setReqType("comments")}>
    //     Comments
    //   </button>
    //   {items}
    // </div>

    <>
      <FormforFetchApi reqType={reqType} setReqType={setReqType} />
      {/* <ListforFetchApi items={items} /> */}
      <Table items={items} />
    </>
  );
};

export default FetchApiChallengeMod;
