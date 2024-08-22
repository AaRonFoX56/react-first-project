import './Button.css'

import React from "react"
import './Button.css'

function Button({ onAddToCart }) {
    return (
        <button className="add-to-cart-btn" onClick={onAddToCart}>
            <b>Add to Cart</b>
        </button>
    )
}

export default Button