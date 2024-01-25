import { useState } from "react"
import classItem from "./ItemCount.module.css"


const ItemCount = ({ stock, onAdd, start }) => {
    const [amount, setAmount] = useState(start)

    const increment = () => {
        if (amount < stock) {
            setAmount(amount + 1)
        }
    }
    const decrement = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

       

    return (
        <section className={classItem.containerCounter}>
            <div className={classItem.containerImportant}>
                <button onClick={decrement} className={classItem.bLeft}>-</button>
                <h4 className={classItem.h4}>{amount}</h4>
                <button onClick={increment} className={classItem.bRight}>+</button>
            </div>

            <div className={classItem.containerAddCart}>
                <button className={classItem.addCart} onClick={() => onAdd(amount)}>Add to Cart</button>
            </div>
        </section>

    )
}

export default ItemCount