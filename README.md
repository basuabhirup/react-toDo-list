# To-Do List with React

### CodeSandbox Live Site URL: [https://codesandbox.io/s/github/basuabhirup/react-toDo-list](https://codesandbox.io/s/github/basuabhirup/react-toDo-list)

<div align="center">
  <img src="https://i.ibb.co/cCNS2H5/image.png" alt="Project Screenshot">
</div>

## Objective of this Project:

- To create a functional To-Do List app from the starting files.
- When new text is written into the input, its state should be saved.
- When the add button is pressed, the current data in the input should be added to an array.
- The `<ul>` should display all the array items as `<li>`s.

## Steps I have followed:

1. Created a new state variable `item` using `useState()` react hook to keep track of changes made on the input field.

```javascript
const [item, setItem] = useState("");

function handleChange(e) {
  setItem(e.target.value);
}
```

```html
<input onChange="{handleChange}" type="text" value="{item}" />
```

<br />

2. Created another state variable `itemsArray` using `useState()` react hook to save the items when the add button is pressed.

```javascript
const [itemsArray, setItemsArray] = useState([]);

function handleClick(e) {
  setItemsArray([...itemsArray, item]);
}
```

```html
<button onClick="{handleClick}"><span>Add</span></button>
```

<br />

3. Used `map()` method on the `itemsArray` to render all the items as `<li>`s in the list:

```javascript
{itemsArray.map((item) => <li>{item}</li>)}
```
