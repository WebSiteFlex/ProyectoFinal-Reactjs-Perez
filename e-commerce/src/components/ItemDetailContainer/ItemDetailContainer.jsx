import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import classDetail from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if(product){
            document.title = product.name   
        } else if( !product){
            console.error("is this products exist?")
        }
        
        return () => {
            document.title = 'e-commerce'
        }
    },[])

    useEffect(() => {
        setLoading(true)

        getProductById(id)
            .then(response => {
                setProduct(response)
            }, err => console.log("check this error in item-detail-container", err))
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if(loading) {
        return <h1>loading products...</h1>
    }

    else if(!product) {
        return <h1>this product not exist</h1>
    }

    return (
        <div className={classDetail.containerInfo}>
            <h1 className={classDetail.titleDetail}>Detail of product</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer