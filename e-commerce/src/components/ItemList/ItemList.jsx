import classItem from "./ItemList.module.css"
import { Link } from "react-router-dom"

const ItemList = ({ products,id }) => {
    return (
        <div className={classItem.containerCards}>
            {
                    products.map(l => {
                        return (
                            <div key={l.id} className={classItem.containerPhones}>
                                <h2>{l.nameP}</h2>
                                <img src={l.img} alt="img" className={classItem.img} />
                                <div className={classItem.containerPs}>
                                    <span className={classItem.price}>${l.price}</span>
                                    <p className={classItem.Stock}>Stock= {l.stock}</p>
                                    <span>Category= {l.category}</span>
                                </div>
                                <Link to={`/detail/${l.id}`} className="btn btn-success">View Detail</Link>
                            </div>
                        )
                    })
                }
        </div>
    )
}
export default ItemList

