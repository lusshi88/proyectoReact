import React, { useContext } from 'react'
import { ContextCarrito } from '../ContextCarrito/ContextCarrito'
import "./carrito.css"

function Carrito() {

    const {carrito,precioTotal,vaciarCarrito} = useContext (ContextCarrito);

  return (
    <div className='producto-carrito'>CARRITO
    

    {
        carrito.map ((prod) =>(
            <div key={prod.id}>
                <br />
            <h2>{prod.titulo}</h2>
            
            <h3>{prod.descripción}</h3>
            <h4>${prod.precio}</h4>
            <h5>cantidad: {prod.cantidad}</h5>
            <h6>TOTAL $: {prod.precio * prod.cantidad}</h6>
            <br />
            </div>
        ))
    }

    <h2>Precio TOTAL {precioTotal()}</h2>
    <br />
    <button onClick={vaciarCarrito}>Vaciar carrito</button>
</div>
  )
}

export default Carrito