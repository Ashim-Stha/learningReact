import { useState } from "react";
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

function App() {
  const [items, setItems] = useState(
    //   [
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "hahah",
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "blabla",
    //   },
    //   {
    //     id: 3,
    //     checked: false,
    //     item: "hellohiii",
    //   },
    // ]
    JSON.parse(localStorage.getItem("listItems"))
  );

  const [search, setSearch] = useState("");

  const handleChange = (id) => {
    // console.log(id);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveLocalstorage(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    saveLocalstorage(listItems);
  };

  const saveLocalstorage = (listItems) => {
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      {/* <Header name="Ashim" />
      <Body />
      <Hello />
      <Footer />
      <Content />
      <FormIn
        items={items}
        setItems={setItems}
        saveLocalstorage={saveLocalstorage}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content1
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      /> */}
      <ChangeColor />
    </div>
  );
}

export default App;
