import classID from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import Swal from 'sweetalert2'

const ItemDetail = (product) => {
    return (
        <div>
            <div>
                <img src={product.img} alt="img" />
            </div>
            <div key={product.id}>
                <h1>{product.nameP}</h1>
                <p>{product.description}</p>
                <ItemCount start={1} stock={20} onAdd={(quantity) => {

                    Swal.fire({
                        title: "Aggregate amount",
                        text: quantity,
                        icon: "success"
                    })

                    localStorage.setItem("Stock", quantity);
                }

                }></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail