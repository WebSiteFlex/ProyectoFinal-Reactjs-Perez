import Cart from "./assets/Cart.png"
import classCart from "./CartWidget.module.css"
import {useCart} from "../Cart/Cart"
const CartWidget = ()=>{
    const {totalOfCart} = useCart()
    return(
        <div className={classCart.containerCart}>
            <img src={Cart} alt="iconCart" className={classCart.img} />
            <span>{totalOfCart}</span>
        </div>
    )
}
export default CartWidget