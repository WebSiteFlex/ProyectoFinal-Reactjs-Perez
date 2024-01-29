import cartImg from './assets/Cart.png'
import { useCart } from '../../Context/Context'

const CartWidget = () => {

    const { totalQuantity } = useCart()

   
    return (
        <div>
            <img src={cartImg}/>
            <span>{totalQuantity}</span>
        </div>
    )
}

export default CartWidget