import { createContext,useState } from "react";


export const ContextCarrito = createContext();



export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregar = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }

        const newCarrito = [...carrito]

        const estaenelCarrito = carrito.find((producto) => producto.id === itemAgregado.id)

        if (estaenelCarrito) {
            estaenelCarrito.cantidad = estaenelCarrito.cantidad + cantidad;

            console.log("Esta");
        } else {
            newCarrito.push(itemAgregado);

        }
        setCarrito(newCarrito)
    }

    const cantidadDeCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
    console.log(cantidadDeCarrito);

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (<ContextCarrito.Provider value={{ carrito, agregar, cantidadDeCarrito, precioTotal, vaciarCarrito }}>
        {children}
    </ContextCarrito.Provider>)


} 

