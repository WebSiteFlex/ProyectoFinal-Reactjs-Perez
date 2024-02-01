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
    }

    const increment = () => {
        if(count < stock)
        setCount(count + 1)
    }

//     const notificationDecrement = ()=>{
//         decrement()
//         const decrementNotification = ()=>{
//             let number = 0
//             if(count > 1){
//                 return number - 1
//         }
//         Toastify({
//             text: `you removed ${decrementNotification}`,
//             duration: 500,
//             gravity: top,
//             style:{
//                 background:"linear-gradient(to right, #00b09b, #96c93d)"
//             }
//             }).showToast();
//     }
// }

//     const notificationIncrement = ()=>{
//         increment()
//         const incrementNotification = ()=>{
//             let number = 0
//             if(count === number){
//                 return number + 1
//         }
//         Toastify({
//             text: `you added ${incrementNotification}`,
//             duration: 500,
//             gravity: top,
//             style:{
//                 background:"linear-gradient(to right, #00b09b, #96c93d)"
//             }
//             }).showToast();
//     }
// }

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