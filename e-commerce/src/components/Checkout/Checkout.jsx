import { useCart } from "../../Context/Context"
import OrderForm from "../OrderForm/OrderForm"
const Checkout = ()=>{
    const {cart,total} = useCart()

    const createOrder =  (userData) =>{
        const personalInfo = {
            user: userData,
            items: cart,
            total
        }
    }
    return(
        <div>
            <h1>checkout</h1>
            <OrderForm onCrate={createOrder}></OrderForm>
        {/* <button onClick={createOrder}> Generate the order</button> */}
        </div>
    )
}

export default Checkout