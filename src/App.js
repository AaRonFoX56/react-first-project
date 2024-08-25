import './App.css';
import List from './List';

function App() {

  const fruits = [
    {id: 1, name: "apple", desc: "very fresh and tasty apples", price: "2$"}, 
    {id: 2, name: "banana", desc: "very fresh and tasty bananas", price: "2$"}, 
    {id: 3, name: "kiwi", desc: "very fresh and tasty kiwis", price: "1$"}, 
    {id: 4, name: "pineapple", desc: "very fresh and tasty pineapples", price: "3$"}
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
    </>
  );
}

export default App;
 