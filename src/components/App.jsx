import React, { useState } from "react";
import Input from "./Input";
import Item from "./Item";

function App() {
  // console.clear()
  const [itemsArray, setItemsArray] = useState([]);

  function addItem(item) {
    setItemsArray([...itemsArray, item]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onClick={addItem} />
      <div>
        <ul>
          {itemsArray.map((item) => (
            <Item itemName={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
