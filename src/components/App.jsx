import React, { useState } from "react";
import Input from "./Input";
import Item from "./Item";

function App() {
  // console.clear()
  const [itemsArray, setItemsArray] = useState([]);

  function addItem(item) {
    setItemsArray([...itemsArray, item]);
  }

  function deleteItem(id) {
    setItemsArray((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onClick={addItem} />
      <div>
        <ul>
          {itemsArray.map((item, index) => (
            <Item key={index} id={index} itemName={item} onClick={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
