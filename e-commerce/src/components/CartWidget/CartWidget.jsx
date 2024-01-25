import Cart from './assets/Cart.png'
import classCart from  "./CartWidget.module.css"


const CartWidget = () =>{
    

    return (
        <div className={classCart.containerCart}>
            <img src={Cart} />
            <span>0</span>
        </div>
    )
}

export default CartWidget   