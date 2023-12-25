import Item from "../Item/Item"
import './ItemList.css'

function ItemList({productos}) {

  return (
    <div className="container">
       <h2 className="title">Productos</h2>
    {
      productos.map((p)=>{
    
        
        return (
          <div className="productos">
          <Item  producto={p } key={p.id} />
          </div>
          )      
      })
}  
    
    </div>
  )
}

export default ItemList