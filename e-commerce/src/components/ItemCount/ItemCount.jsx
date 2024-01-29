import { useState,useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import classItemCount from "./ItemCount.module.css"

import Toastify from 'toastify-js'
const ItemCount = ({  stock, onAdd }) => {
    const [count, setCount] = useState(0)

    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
        Toastify({
            text: `removed ${count}`,
            duration: 500,
            gravity: top,
            style:{
                background:"linear-gradient(to right, #00b09b, #96c93d)"
            }
            }).showToast();
    }

    const increment = () => {
        if(count < stock)
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className={classItemCount.titleCount}>Products added: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)} className={classItemCount.addToCart}>add to cart</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount