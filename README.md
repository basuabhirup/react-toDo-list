# To-Do List with React

### CodeSandbox Live Site URL: [https://codesandbox.io/s/github/basuabhirup/react-toDo-list](https://codesandbox.io/s/github/basuabhirup/react-toDo-list)

This project is a part of [The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) by [London App Brewery](https://www.londonappbrewery.com/), instructed by Dr. Angela Yu.

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

function addItem() {
  setItemsArray([...itemsArray, item]);
  setItem("");
}
```

```html
<button onClick="{addItem}"><span>Add</span></button>
```

<br />

3. Used `map()` method on the `itemsArray` to render all the items as `<li>`s in the list:

```javascript
{
  itemsArray.map((item) => <li>{item}</li>);
}
```

<br />

4. Created two new components - `Input` and `Item` inside `App` for reusability, modularity and a better readability.

5. Modified the code to keep the app functional by managing states and props of all the components.

```javascript
// Inside 'components/App.jsx'
function addItem(item) {
  setItemsArray([...itemsArray, item]);
}

<Input onClick={addItem} />;

// Inside 'components/Input.jsx'
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
```

```javascript
// Inside 'components/App.jsx'
<ul>
  {itemsArray.map((item) => (
    <Item itemName={item} />
  ))}
</ul>;

// Inside 'components/Item.jsx'
function Item(props) {
  return <li>{props.itemName}</li>;
}
```
