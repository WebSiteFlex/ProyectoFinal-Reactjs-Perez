import { useCart } from "../../Context/Context"
import { useState } from "react"
import OrderForm from "../OrderForm/OrderForm"
import { collection, getDocs, where, query, documentId, writeBatch } from "firebase/firestore"
import { useNotification } from "../../Notifications/Notifications"
const Checkout = () => {
    const [order, setOrder] = useState()
    const { cart, total } = useCart()
    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        const personalInfo = {
            user: userData,
            items: cart,
            total
        }
        const batch = writeBatch(db)
        const outOfOut = []
        const documentPrevId = cart.map(value => value.id)
        const collectionOfArrays = query(collection(db, "listProducts"), where(documentId(), "in", documentPrevId))

        //generate a delay with async

        const snapshot = await getDocs(collectionOfArrays)

        const { docs } = snapshot

        docs.forEach(info => {
            const file = info.data()
            const stockQuantity = file.stock

            const elementsAddedInCart = cart.find(pr => pr.id === InputDeviceInfo.id)
            const pQuantity = elementsAddedInCart.total

            if (stockQuantity >= pQuantity) {
                batch.update(info.ref, { stock: stockQuantity - pQuantity })
            } else {
                outOfOut.push({ id: info.id, ...file })
            }
        })

        if (outOfOut.length === 0) {
            batch.commit()
            const orderCollection = collection(db, "orders")
            const { id } = await addDoc(orderCollection, personalInfo)
            setOrder(id)
        } else {
            showNotification("there is product that theme haven´t got stock")
        }

        if (order) {
            return <h1>your id is : {order}</h1>
        }

        // getDocs(collectionOfArrays).then()
    }


    return (
        <div>
            <h1>checkout</h1>
            <OrderForm onCreate={createOrder}></OrderForm>
        </div>
    )
}

export default Checkout