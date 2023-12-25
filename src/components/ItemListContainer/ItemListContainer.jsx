import  { useContext, useEffect, useState } from 'react'
import './ItemListContainer.css'
import NavBar from '../NavBar'
import {Flex}from '@chakra-ui/react'
import {Firestore, collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { ContextCarrito } from '../ContextCarrito/ContextCarrito'

const ItemListContainer = () => {
const db = getFirestore();

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(()=>{

  const db = getFirestore()   
  const itemColecction = collection(db , "respuestos");
  
  const quer = categoria ? query(itemColecction, where ("categoria", "==", categoria)) : itemColecction;

  getDocs(quer).then((snapshot)=>{
    // const docs = snapshot.docs.map((doc)=>doc.data())
    
    
    setProductos (
    snapshot.docs.map ((doc) => {
      return {...doc.data(), id: doc.id}
    } )
    )
    
    
  })


  },[categoria])



  return (
    <div>
      <ItemList productos= {productos} />
    </div>
    
    
      
    
  )
    }
export default ItemListContainer