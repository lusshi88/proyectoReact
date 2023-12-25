import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { ContextCarrito } from "../ContextCarrito/ContextCarrito";
import NavBar from "../NavBar";



function ItemDetail({item}) {

  const {carrito,agregar} = useContext(ContextCarrito);
  console.log(carrito);

  const [cantidad,setCantidad] = useState (1);

  const restar = () => {
    cantidad > 1 && setCantidad(cantidad -1)
  }

  const sumar = () => {
    setCantidad(cantidad +1)
  }
  


 


  return (
    <div className="producto">
      <img src={item.imagen}  />
      <div>
        <h3 className="titulo">{item.titulo}</h3>
        <p>{item.descripción}</p>
        <p>Categoría: {item.categoria}</p>
        <p>${item.precio}</p>
        <ItemCount
        cantidad={cantidad}
        sumar={sumar}
        restar={restar}
        agregar={()=>{agregar(item,cantidad)}}
         />
        
      </div>
    </div>
  )
}

export default ItemDetail