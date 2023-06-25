import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Hello from "./Hello";
import Footer from "./Footer";
import Content from "./Content";
import Content1 from "./Content1";
import FormIn from "./FormIn";
import SearchItem from "./SearchItem";
import ChangeColor from "./ChangeColor";
import ApiRequest from "./ApiRequest";
import FetchApiChallenge from "./FetchApiChallenge";

function App() {
  // const [items, setItems] = useState(
  //   //   [
  //   //   {
  //   //     id: 1,
  //   //     checked: true,
  //   //     item: "hahah",
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     checked: false,
  //   //     item: "blabla",
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     checked: false,
  //   //     item: "hellohiii",
  //   //   },
  //   // ]
  //   JSON.parse(localStorage.getItem("listItems")) || []
  // );

  // const [items, setItems] = useState([]);
  // const [fetchError, setfetchError] = useState(null);
  // const [loadingstate, setloadingstate] = useState(true);

  // const API_URL = "http://localhost:3500/items";
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);

  //       if (!response.ok) throw Error("Didnot get expected data");
  //       const listItems = await response.json();

  //       setItems(listItems);
  //       // console.log(listItems);
  //       setfetchError(null);
  //     } catch (err) {
  //       // console.log(err.stack);
  //       setfetchError(err.message);
  //     } finally {
  //       setloadingstate(false);
  //     }
  //   };

  //   // fetchItems();
  //   // (async () => await fetchItems())();

  //   setTimeout(() => {
  //     (async () => await fetchItems())();
  //   }, 2000);
  // }, []);

  // const [search, setSearch] = useState("");

  // const handleCheck = async (id) => {
  //   // console.log(id);
  //   const listItems = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   saveLocalstorage(listItems);

  //   const myNewItem = listItems.filter((item) => item.id === id);

  //   const updateOptions = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ checked: myNewItem[0].checked }),
  //   };

  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await ApiRequest(reqUrl, updateOptions);
  //   if (result) setfetchError(result);
  // };

  // const handleDelete = async (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   saveLocalstorage(listItems);

  //   const deleteOptions = {
  //     method: "DELETE",
  //   };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await ApiRequest(reqUrl, deleteOptions);
  // };

  // const saveLocalstorage = (listItems) => {
  //   setItems(listItems);
  //   localStorage.setItem("listItems", JSON.stringify(listItems));
  // };
  return (
    <div className="App">
      {/* <Header name="Ashim" />
      <Body />
      <Hello />
      <Footer />
      <Content /> */}
      {/* <FormIn
        items={items}
        setItems={setItems}
        saveLocalstorage={saveLocalstorage}
        API_URL={API_URL}
        setfetchError={setfetchError}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {loadingstate && <p>Loading...</p>}
        {fetchError && (
          <p
            style={{
              color: "red",
            }}
          >{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && !loadingstate && (
          <Content1
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main> */}

      <FetchApiChallenge />
      {/* <ChangeColor /> */}
    </div>
  );
}

export default App;

// npx json-server -p 3500 -w data/db.json
