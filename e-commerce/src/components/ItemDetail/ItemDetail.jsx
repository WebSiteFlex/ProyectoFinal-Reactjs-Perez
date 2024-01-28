import {useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import {useCart} from "../Cart/Cart"

const ItemDetail = (id,nameP,price,description,category,img,stock) =>{
    const [total, setTotal] = useState(0)
    const {addingItem} = useCart()

    const handleOnAdd = (total) =>{
        const productParts = {
            id,nameP,price,total
        }
        addingItem(productParts)
        setTotal(total)
    }
    return(
        <article>
        <header>
            <h2>
                {`name: ${nameP}`}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nameP} style={{ width: 100}}/>
        </picture>
        <section>
            <p>
                {`Category: ${category}`}
            </p>
            <p>
             {`Description: ${description}`}
            </p>
            <p>
             {`Price: ${price}`}
            </p>
        </section>           
        <footer>
            {
                total === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                ) : (
                    <Link to='/cart'>finalize purchase</Link>
                )
            }
        </footer>
    </article>
    )
}
export default ItemDetail