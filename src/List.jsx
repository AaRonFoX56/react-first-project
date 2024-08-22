import React, { useState } from "react"
import './List.css'
import Button from './Button'

function List({ items, category, onAddToCart }) {
    const [isListVisible, setIsListVisible] = useState(false)

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible)
    }
    
    const listItems = items.map(item => (
        <li key={item.id}>
            <p>Name: {item.name}, <b>description: {item.desc}</b></p>
            <Button onAddToCart={onAddToCart} />
        </li>
    ));

    return (
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
    )
}

export default List