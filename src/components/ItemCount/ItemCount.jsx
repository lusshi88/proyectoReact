import React, { useContext, useState } from 'react'
import "./ItemCount.css"
import { ContextCarrito } from '../ContextCarrito/ContextCarrito';
import ItemDetail from '../ItemDetail/ItemDetail';

function  ItemCount  ({cantidad,sumar,restar,agregar})  {
   
   


  return (
    <div>
      {/* aca tengo la cantidad de productos para seleccionar  */}
        <div className='item-count'>
            <button onClick= {restar}>-</button>
            <p>{cantidad}</p>
            <button onClick={sumar}>+</button>
        </div>
        <div>
            <button className='agregar-al-carrito' onClick={agregar}>Agregar al changuito</button>
            
        </div>
    </div>
  )
}

export default ItemCount