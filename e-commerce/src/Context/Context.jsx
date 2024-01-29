import { useState, createContext, useContext } from "react"
import Swal from "sweetalert2"

const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    totalQuantity: 0,
    total: 0,
    clearCart: () => {}
})

//create const
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prod => [...prod, productToAdd])
      } else if(isInCart.length > 0) {
        Swal.fire({
          title: "The product was added?",
          text: "do you want to add it again?",
          icon: "question"
        })
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removingItem = (id) => {
      const cartToUpdate = cart.filter(prod => prod.id === id)
      setCart(cartToUpdate)
    }

    const getTotalQuantity = () => {
        let count = 0

        cart.forEach(prod => {
            count += prod.total
        })

        return count
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {

    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removingItem , totalQuantity, total, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}