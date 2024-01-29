import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./Context/Context"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer></ItemListContainer>} />
            <Route path="/category/:category" element={<ItemListContainer></ItemListContainer>} />
            <Route path="/detail/:id" element={<ItemDetailContainer></ItemDetailContainer>} />
            <Route path="*" element={<h4>Error 404</h4>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
