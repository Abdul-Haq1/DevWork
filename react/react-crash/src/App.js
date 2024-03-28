import Header from './components/Header'
import Items from './components/Items'
import './index.css';
import React from 'react'
import { useState } from "react"

const App = () => {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        text: 'Apples',
        quantity: '1 kg',
        bought: true
      },
      {
        id: 2,
        text: 'Bananas',
        quantity: '1 Dozen',
        bought: true
      },
      {
        id: 3,
        text: 'Eaggs',
        quantity: '2 carets',
        bought: true
      },
      {
        id: 4,
        text: 'Milk',
        quantity: '4 lt',
        bought: true
      },
      {
        id: 5,
        text: 'vegitables',
        quantity: 'For a week',
        bought: true
      },
    ]
  )

  // Delete Item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <Header title={'Shoping List'} />
      {items.length > 0 ? (<Items items={items} onDelete={deleteItem} />) : (
        'No Items To Show'
      )}
    </div>
  )
}
export default App;

//Basic understanding of creating component by using function

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// function App() {
//   const name = 'Brad'
//   const x = true

//   const products = [
//     { title: 'Cabagge', id: 1 },
//     { title: 'Garlic', id: 2 },
//     { title: 'Apple', id: 3 },
//   ]

//   const listItems = products.map(product =>
//     <li key={product.id}>{product.title}</li>
//   );

//   return (
//     <div className="avatar">
//       <h1 style={{ color: 'red', backgroundColor: 'black' }}>Hello, {name}</h1>
//       <h2>Oh! {x ? 'yes' : 'No'}</h2>
//       <MyButton />
//       <ul>{listItems}</ul>
//     </div>
//   );
// }

// creating component by using class

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Header />
//       </>
//     )
//   }
// }

