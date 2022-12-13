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
    <ul>
      <li style = {style} onclick = { () => setIsDone(!isDone)}>{props.groceryItem}</li>
    </ul>
  )
}

const GroceryList = (props) => {
  <div id="app">
    {props.groceryItems.map((groceryItem) => ( // update the 'GroceryList' to use the new 'GroceryListItem' component
      <GroceryListItem groceryItem = {groceryItem}/>
    ))}
  </div>
}