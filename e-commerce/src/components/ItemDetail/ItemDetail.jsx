import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from "../../Context/Context"
import classItemDetail from "./ItemDetail.module.css"
import Swal from 'sweetalert2'

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [total, setTotal] = useState(0)

    const { addItem } = useCart()

    const handleOnAdd = (total) => {
        const objProductToAdd = {
            id, name, price, total
        }
        addItem(objProductToAdd)
        Swal.fire({
            title: "Aggregate amount",
            text: total,
            icon: "success"
        })
        setTotal(total)
        

    }

    return (
        <article className={classItemDetail.containerFather}>
            <section>
                <img src={img} alt={name} className={classItemDetail.img} />
            </section>
            <section className={classItemDetail.containerImg}>
                <h2 className={classItemDetail.titleP}>
                    {name}
                </h2>
                <div className={classItemDetail.containerInfoP}>
                    <p className={classItemDetail.price}>
                       ${price} USD
                    </p>
                    <p>
                        {`Category: ${category}`}
                    </p>
                    <p>
                        {`Description: ${description}`}
                    </p>

                </div>
                {
                    total === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalize Purchase</Link>
                    )
                }
            </section>
        </article>
    )
}

export default ItemDetail