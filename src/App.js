import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Hello from "./Hello";
import Footer from "./Footer";
import Content from "./Content";
import Content1 from "./Content1";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "hahah",
    },
    {
      id: 2,
      checked: false,
      item: "blabla",
    },
    {
      id: 3,
      checked: false,
      item: "hellohiii",
    },
  ]);
  const handleChange = (id) => {
    // console.log(id);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      <Header name="Ashim" />
      <Body />
      <Hello />
      <Footer />
      <Content />
      <Content1
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
