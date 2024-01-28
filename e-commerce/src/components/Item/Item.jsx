import { Link } from "react-router-dom"
import classItem from "./Item.module.css"
const Item = ({id,nameP,img,price}) =>{
    return(
        <div className={classItem.containerTags}>
                <h2 className={classItem.titleP}>{nameP}</h2>
                <img className={classItem.imgP} src={img} alt="imgProducts" />
                <h3 >${price}</h3>
                <Link to={`/detail/${id}`} className={classItem.viewDetail}> view details now!</Link>
        </div>
    )
}

export default Item