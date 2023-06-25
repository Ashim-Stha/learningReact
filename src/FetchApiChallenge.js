import React, { useEffect, useState } from "react";

const FetchApiChallenge = () => {
  const [apiUrl, setapiUrl] = useState("https://jsonplaceholder.typicode.com");
  const [boolValue, setboolValue] = useState(false);
  const [apiFetch, setapiFetch] = useState(null);

  let Users = [];
  let Posts = [];
  //   let API_URL = "https://jsonplaceholder.typicode.com";
  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       try {
  //         const response = await fetch(apiUrl);
  //         if (!response.ok) throw Error("not found please");
  //         const result = await response.json();
  //         setapiFetch(result);
  //       } catch (err) {
  //         setapiFetch(err.message);
  //       }
  //     };
  //     (async () => await fetchApi())();
  //   });
  const fetchApi = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw Error("not found please");
      const result = await response.json();

      setapiFetch(result);
      return result;
    } catch (err) {
      setapiFetch(err.message);
    }
  };
  const handleUsers = async () => {
    if (apiUrl === "https://jsonplaceholder.typicode.com") {
      setapiUrl(`${apiUrl}/users`);
      (async () => await fetchApi())();
    } else {
      setapiUrl("https://jsonplaceholder.typicode.com");
    }

    if (await fetchApi()) {
      setboolValue(true);
    }

    Users.push(apiFetch);
    console.log(Users);
    // await fetchApi();
  };
  const show = (arg) => {
    while (arg) {
      return "Loading";
    }
    return arg;

    const handlePosts = async () => {
      setapiFetch(null);
      setapiUrl("https://jsonplaceholder.typicode.com");

      if (apiUrl === "https://jsonplaceholder.typicode.com") {
        setapiUrl(`${apiUrl}/posts`);
        (async () => await fetchApi())();
      } else {
        setapiUrl("https://jsonplaceholder.typicode.com");
      }

      if (await fetchApi()) {
        setboolValue(true);
      }
    };
  };
  //   setapiUrl("https://jsonplaceholder.typicode.com");
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUsers();
          }}
        >
          <button type="submit">Users</button>
          <p>{show(Users)}</p>
        </form>

        {/* {`${JSON.stringify(apiFetch)}`} */}
      </div>
      {/* <div>
        <button type="submit" onClick={handlePosts}>
          Posts
        </button>
        <p>{boolValue && `${JSON.stringify(apiFetch)}`}</p>
      </div> */}
    </>
  );
};

export default FetchApiChallenge;
