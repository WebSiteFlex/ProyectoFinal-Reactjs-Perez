import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'
import './App.css'

function App() {


  return (
    <>
        <BrowserRouter>
              <NavBar></NavBar>
            <Routes>
              <Route path="/" element={ <ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={ <ItemListContainer/>}/>
              <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
              <Route path="*" element={<h3>Error 404</h3>}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
