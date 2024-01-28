import { useState,useEffect } from "react"
import classIContainer from "./ItemListContainer.module.css"
import {getFirstProducts,getSecondProductsByCategory} from "../../asyncMock"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{
    const [obtainProducts,setObtainProducts] = useState([])
    const {category} = useParams()
    useEffect(()=>{
        const detailFunction = category ? getSecondProductsByCategory : getFirstProducts
        detailFunction(category)
        .then(responseCategory =>{
            setObtainProducts(responseCategory )
        })
    },[category])
    return(
        <div className={classIContainer.containerItem}>
            <h1 className={classIContainer.h1} >now on sale</h1>
            <h5 className={classIContainer.subtitle}>UP TO 50% OFF</h5>
            <section className={classIContainer.containerProducts}>
                <ItemList products={obtainProducts}/>
            </section>
        </div>
    )
}

export default ItemListContainer