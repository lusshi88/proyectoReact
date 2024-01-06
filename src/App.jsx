import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sobrenosotros from './components/Sobrenosotros'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar'
import { Spinner } from '@chakra-ui/react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './components/Checkout'
import Contacto from './components/Contacto/Contacto'
import { CartProvider, ContextCarrito } from './components/ContextCarrito/ContextCarrito'
import Carrito from './components/Carrito/Carrito'


function App() {
 


  return (
   
    <div>
      <CartProvider>
       <BrowserRouter>
      <NavBar />
       
      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/nosotros" element={<Sobrenosotros/>} />
      <Route path="/productos" element={<ItemListContainer/>} />
      <Route path="/productos/:categoria" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/carrito" element={<Carrito/>} />

      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
    
  )
}

export default App
