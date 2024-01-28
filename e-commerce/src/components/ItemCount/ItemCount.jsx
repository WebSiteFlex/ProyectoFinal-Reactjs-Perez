import { useState } from "react"

const ItemCount = ({onAdd, stock}) =>{
    const {counter, setCounter} = useState(0)


const incrementValue = () =>{
    if(counter < stock ){
        setCounter(counter + 1)
    }
}

const decrementValue = () =>{
    if(counter > 0){
        setCounter( counter -1)
    }
}

return(
    <div>
            <button onClick={decrementValue}>-</button>
            <span>{counter}</span>
            <button onClick={incrementValue}>+</button>
            <button onClick={()=> onAdd(counter)}>add to cart</button>
    </div>
)
}
export default ItemCount