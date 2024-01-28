import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <NavBar/>
       <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:category" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/detail/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path="*" element={<h4>Error 404</h4>}> </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
