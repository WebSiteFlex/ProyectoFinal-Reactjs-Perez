import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import classItemC from "./ItemListContainer.module.css"

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {
        if (category) document.title = 'e-commerce: ' + category

        return () => {
            document.title = 'e-commerce'
        }
    })

    useEffect(() => {
        setLoading(true)

        const obtainList = category ? getProductsByCategory : getProducts

        obtainList(category)
            .then(response => {
                setProducts(response)
            }, warn => console.log(warn))
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])


    if (loading) {
        return <h1>Loading products...</h1>
    } else if (!loading) {
        console.error("any problem ocurred in setLoading products")
    }

    return (
        <div className={classItemC.containerItem}>
            <h1 className={classItemC.h1} >detail products</h1>
            <h2 className={classItemC.subtitle}>UP TO 50% OFF</h2>
            <div className={classItemC.containerProducts}>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer