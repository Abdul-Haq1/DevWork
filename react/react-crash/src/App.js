import React from 'react';
import Header from './components/Header'
import './index.css';

const products = [
  { title: 'Cabagge', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]

const App = () => {
  return (
    <div className="container">
      <Header title={'Shoping List'} />
    </div>
  )
}

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


export default App;
