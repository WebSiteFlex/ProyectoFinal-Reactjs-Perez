import { useCart } from "../../Context/Context";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart, total, totalQuantity, removingItem } = useCart();

    return (
        <>
            <h1>Shop Cart</h1>
            <div>
                {cart.map((callProd) => {
                    return (
                        <div key={callProd.id}>
                            <div>
                                <img src={callProd.img} alt="imgProducts" />
                            </div>
                            <h2>{callProd.name}</h2>
                            <h4>{`Total: ${callProd.total}`}</h4>
                            <h4>{`Price per unit: $${callProd.price}`}</h4>
                            <h4>{`Total amount: $${callProd.total * callProd.price}`}</h4>
                            <button onClick={() => removingItem(prod.id)}>Remove Product</button>
                        </div>
                    );
                })}
            </div>
            <section>
                <span>{`Total: $${total}`}</span>
            </section>
            <section>
                <Link to="/checkout">Checkout</Link>
            </section>
        </>
    );
};

export default CartView;
