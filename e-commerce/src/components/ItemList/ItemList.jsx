import Item from "../Item/Item"
import classItemList from "./ItemList.module.css"
const ItemList = ({products})  =>{
return(
    <div className={classItemList.containerP}>
        {
            products.map(items=>{
                return(
                    <Item key={items.id} {...items}/>
                )
            })
        }
    </div>
)
}

export default ItemList