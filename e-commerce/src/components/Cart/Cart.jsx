import { useState, createContext, useContext } from "react"

const Cart = createContext({
    shopCart: [],
    addingItem: () => { },
    removeItem: () => { },
    totalCart: 0,
    total: 0,
    cleanCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    localStorage.setItem("totalCart", cart)


    const addingItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(last => [...last, productToAdd])
        } else {
            console.error("this product was added to cart")
        }
    }


    const isInCart = (id) => {
        const cartUpdated = shopCart.filter(prod => prod.id === id)
        setCart(cartUpdated)

    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod.id === id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let count = 0

        shopCart.forEach(item => {
            count += item.total
        })

        return count
    }

    const totalCart = getTotalQuantity()

    const getTotal = () => {

    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <Cart.Provider value={{ shopCart, addingItem, removeItem, totalCart, total, clearCart }}>
            {children}
        </Cart.Provider>
    )
}
export const useCart = () => {
    return useContext(Cart)
}
