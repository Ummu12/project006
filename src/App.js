import React from "react";
import { Item } from "./component/Item";
import "./component/style.css"

function App() {
  return (
    <div className="main">
      <Item title="Fruits" 
      data={["Apple", "Orange", "Banana"]} />
      <Item 
      title="Wild Animals" 
      data={["Loin", "Zebra", "Chetah"]} />
      <Item
        title="Domestic Animals"
        data={["Cow", "Goat", "Cat", "Donkey", "Sheep"]}
      />
      <Item title="Flower" data={["Rose", "Lilly"]} />
    </div>
  );
}

export default App;