import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({producto }) => {



  return (
    
       <div className="producto-item"  >
        <img src={producto.imagen} />
        <div>             
        <h3 > {producto.titulo}</h3>
        <h4 >{producto.descripción}</h4>
        <h5 >${producto.precio}</h5>
        <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más </Link>
        </div>
        </div>
  )
}

export default Item