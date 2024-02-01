import { useState, createContext, useContext } from "react"


const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removingItem: () => {},
    totalQuantity: 0,
    total: 0,
    clearCart: () => {}
})

//create cartProvider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prod => [...prod, productToAdd])
      } else{
       
          console.warn("this product was already added")
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
      let count = 0

      cart.forEach(prod => {
          count += prod.total * prod.price
      })

      return count
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