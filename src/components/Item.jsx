import React from "react";

function Item(props) {
  return <li onClick={() => props.onClick(props.id)}>{props.itemName}</li>;
}

export default Item;
