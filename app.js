// TODO
// const GroceryList = () => {
//  <div id="app">
//     <ul>
//       <Cucumbers />
//       <Kale />
//     </ul>
//   </div>
// }

// const Cucumbers = () => {
//   <li>Cucumbers</li>
// }

// const Kale = () => {
//   <li>Kale</li>
// }
// ReactDom.render(<App />, document.getElementById("existing-dom-element-into-which-I-want-to-render-my-component"));
const { useState } = React; // var useState = React.useState

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false); // React.useState = !isDone

  const style = {
    textDecoration: isDone ? 'line-through' : 'none' // update the React's 'style' attribute
  }

  return (
      <li style = {style} onClick = {() => setIsDone(!isDone)}>
        {props.groceryItem}
      </li>
  )
}

const GroceryList = (props) => {
  <ul>
    {props.groceryItems.map((groceryItem) => ( // update the 'GroceryList' to use the new 'GroceryListItem' component
      <GroceryListItem groceryItem = {groceryItem}/>
    ))}
  </ul>
}

ReactDom.render(<GroceryList />, document.getElementById('app'));