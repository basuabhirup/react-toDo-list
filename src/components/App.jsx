import React, { useState } from "react";

function App() {
  // console.clear()
  const [item, setItem] = useState("");
  const [itemsArray, setItemsArray] = useState([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick() {
    setItemsArray([...itemsArray, item]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
