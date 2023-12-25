import React, { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';




function ItemDetailContainer() {
  
  const [item,setItem] = useState(null);
  const id = useParams () .id;
  const db= getFirestore();

  useEffect (()=>{
    const docRef = doc (db, "respuestos", id);
    getDoc(docRef).then((resp) =>{
      
      setItem(
        
        {...resp.data(), id: resp.id}
        
        );

       
    })

  }, [id])
  
  return (
    <div>
      {item && <ItemDetail item={item} />}
      
    </div>
  )
}

export default ItemDetailContainer