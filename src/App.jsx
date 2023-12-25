
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sobrenosotros from './components/Sobrenosotros'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar'
import { Spinner } from '@chakra-ui/react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './components/Checkout'
import Contacto from './components/Contacto/Contacto'
import { useState } from 'react'
import { ContextCarrito } from './components/ContextCarrito/ContextCarrito'


function App() {
  const [carrito,setCarrito] = useState ([]);

  const agregar = (item,cantidad) => {
    const itemAgregado = {...item,cantidad}

    const newCarrito = [...carrito]

    const estaenelCarrito = carrito.find((producto) => producto.id === itemAgregado.id)

    if (estaenelCarrito){
      estaenelCarrito.cantidad =  estaenelCarrito.cantidad + cantidad;
      
      console.log("Esta");
    }else {
      newCarrito.push(itemAgregado);
 
  }
  setCarrito(newCarrito)
}

  const cantidadDeCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }
  console.log(cantidadDeCarrito);

  return (
   
    <div>
      <ContextCarrito.Provider value={ {carrito, agregar,cantidadDeCarrito} }>
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
      </Routes>
      </BrowserRouter>
      </ContextCarrito.Provider>
    </div>
    
  )
}

export default App
