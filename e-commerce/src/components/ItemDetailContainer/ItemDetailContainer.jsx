import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import classDetail from "./ItemDetailContainer.module.css"
import sorryImgD from "./assets/sorry.png"
import { db } from "../../fireBaseService/FireBase/FireBaseConfig"
import { getDoc, doc } from "firebase/firestore"
const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if (product) {
            document.title = product.name
        }
        // } else if( !product){
        //     console.error("is it product exist?")
        // }

        return () => {
            document.title = 'e-commerce'
        }
    }, [])

    useEffect(() => {
        setLoading(true)

        const document = doc(db, "listProducts", id)
        getDoc(document)
            .then(resolve => {
                const docFields = resolve.data()
                const documentUpdated = {
                    id: resolve.id, ...docFields
                }
                setProduct(documentUpdated)
            })

            .finally(() => {
                setLoading(false)
            })
        // getProductById(id)
        //     .then(response => {
        //         setProduct(response)
        //     }, err => console.log("check this error in item-detail-container", err))
        //     .catch(error => {
        //         console.error(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [id])

    if (loading) {
        return <h1>loading products...</h1>
    }

    else if (!product) {
        return <h1 className={classDetail.notExist}>this product not exist <img src={sorryImgD} alt="icon" className={classDetail.igmSorry} /> </h1>
    }

    return (
        <div className={classDetail.containerInfo}>
            <h1 className={classDetail.titleDetail}>Detail of product</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer