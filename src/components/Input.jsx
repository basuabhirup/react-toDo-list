import React, { useState } from "react";

function Input(props) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={item} />
      <button
        onClick={() => {
          props.onClick(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
