import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'
import {Menu,MenuButton,MenuItem,MenuList,Flex,Box,Spacer,Button,Badge}from '@chakra-ui/react'
// biblioteca de iconos --------------------
import {GiCarWheel}from "react-icons/gi";

const NavBar = () => {
  return (
    <div>
      <Flex>
  <Box  >
  <Button>

    <Link to={"/"}>
      <h2 className='icono' >  <GiCarWheel />   </h2>
      </Link >

      <Badge className='badge' borderRadius="full " variant="solid" colorScheme="red" ml={2}>
Respuestos 206

</Badge>
      </Button>     
  </Box>
  <Spacer />
      <Menu>     
  <MenuButton className='menuboton'>
    Menu
  </MenuButton>
  <MenuList className='items'>
    <Link to={"/nosotros"} >
    <MenuItem >Sobre nosotros</MenuItem>
    </Link>

    <Link to={"/productos/trendelantero"} >
      <MenuItem>Tren delantero</MenuItem>
    </Link>
    
    
    <Link to={"/productos/cubiertas"} >
      <MenuItem>Cubiertas</MenuItem>
    </Link>
    
    <Link to={"/productos/suspension"} >
    <MenuItem>Suspensión</MenuItem>
    </Link>

    <Link to={"/productos/opticas"} > 
    <MenuItem>Opticas</MenuItem>
    </Link> 

    <Link to={"/contacto"} > 
    <MenuItem>Contacto</MenuItem>
    </Link> 

  </MenuList>
  
</Menu>
  <Spacer />
  <Box p='4' >
    <CartWidget />
  </Box>
  
  </Flex>
  
      
      
      
    </div>
  )
}

export default NavBar