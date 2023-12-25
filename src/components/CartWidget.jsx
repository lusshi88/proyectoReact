import { Button,Badge } from '@chakra-ui/react';
import React, { useContext } from 'react'

// biblioteca de iconos --------------------
import {BiSolidCart}from "react-icons/bi";
import { ContextCarrito } from './ContextCarrito/ContextCarrito';
import { Link } from 'react-router-dom';



const CartWidget = () => {

const {cantidadDeCarrito} = useContext (ContextCarrito);


  return (
    
    <div className='carrito'>
   
      

    <Button>
      <BiSolidCart  /> 

      <Link to={"/carrito"}> <Badge borderRadius="full " variant="solid" colorScheme="red" ml={3}> {cantidadDeCarrito()}  </Badge></Link>
       </Button>
        </div>
        
  )
}

export default CartWidget