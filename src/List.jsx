import React, { useState } from "react"
import './List.css'

function List({ items, category }) {
    const [isListVisible, setIsListVisible] = useState(false)
    const [goodsInCart, setGoodsInCart] = useState([]);
    const [priceList, setPriceList] = useState([])

    
    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible)
    }

    const clearTheCart = () => {
        setGoodsInCart([])
        setPriceList([])
    }
    
    const handleRemoveGood = (index) => {
        setGoodsInCart(g => g.filter((_, i) => i !== index));
        setPriceList(p => p.filter((_, i) => i !== index))
    }
    
    const listItems = items.map(item => (
        <li key={item.id}>
            <p>Name: {item.name}, <b>description: {item.desc}</b>. Price: {item.price}</p>
            <input type="hidden" value={item.name}></input>
            <button className="add-to-cart-btn" 
                    onClick={() => {
                        const priceValue = item.price.split("$");
                        console.log(priceValue[0]);
                        setGoodsInCart(g => [...g, item.name]);
                        setPriceList(p => [...p, Number(priceValue[0])])
                        }}>
                <b>Add to Cart</b>
            </button>
        </li>
    ));

    return (<>
        <div>
        <p>Goods in Cart: {goodsInCart.length}</p>
        <p>Total Price: {priceList.reduce((acc, curr) => {return acc + curr}, 0)}$</p>
        <ul className="goods-list">
            {goodsInCart.map((good, index) => <li key={index} onClick={() => handleRemoveGood(index)}> {good} </li>)}
        </ul>
        <button className="clear-button" onClick={clearTheCart}>Clear the Cart</button>
        </div>
        <div>
            <h2 className="list-category" onClick={toggleListVisibility}> 
                {category} 
            </h2>
            {isListVisible && (
                <ul className="list-items"> 
                    {listItems} 
                </ul>
            )}
        </div>
    </>)
}

export default List