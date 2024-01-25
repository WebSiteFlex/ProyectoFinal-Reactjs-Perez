import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

//  console.log("id", id)

  useEffect(() => {

    getProductById(id).then(result => setProduct(result))
  .catch(error => console.log(error))
}, []);

  return (
    <>
      <Link to="/">Back to home</Link>
      <h1>Detail</h1>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Loading product details...</p>
      )}
    </>
  );
};

export default ItemDetailContainer;