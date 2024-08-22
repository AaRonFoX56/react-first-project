import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [goodsInCart, setGoodsInCart] = useState(0);

  const fruits = [
    {id: 1, name: "apple", desc: "very fresh and tasty apples"}, 
    {id: 2, name: "banana", desc: "very fresh and tasty bananas"}, 
    {id: 3, name: "kiwi", desc: "very fresh and tasty kiwis"}, 
    {id: 4, name: "pineapple", desc: "very fresh and tasty pineapples"}
  ];

  const addToCart = () => {
    setGoodsInCart(goodsInCart + 1);
  };

  const clearTheCart = () => {
    setGoodsInCart(0)
  }

  return (
    <>
      <p>Goods in Cart: {goodsInCart}</p>
      <button className="clear-button" onClick={clearTheCart}>Clear the Cart</button>
      <List items={fruits} category="Fruits" onAddToCart={addToCart} />
    </>
  );
}

export default App;
 