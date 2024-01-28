import classDetail from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
import { getThirdProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const { pId } = useParams()

    useEffect(() => {
        getThirdProductsById(pId)
            .then(result => {
                setDetailProduct(result)
            })
    }, [pId])

    if (!detailProduct) {
        return <h4>The product is don't exist</h4>
    }
    return (
        <>
            <h1>product details</h1>
            <div>
               <ItemDetail {...detailProduct}/>
            </div>
        </>
    )
}

export default ItemDetailContainer