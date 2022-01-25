import React, { createContext,  useState } from 'react';
export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart,setCart]= useState([])

    //AgregaralCarrito viene de itemdetail
    const agregarAlCarrito = (item, cantidad) => {
        total()
        if (existeEnCarrito(item.id)) {
            sumarCantidad (item, cantidad)
        } else {
            setCart([...cart, { ...item, cantidad }]); 
        }
    };

    const existeEnCarrito = (id) => {
        const carrito = cart.some ((prod) => prod.id === id);
        return carrito;
    }

    const sumarCantidad = (item, cantidad) => {
        const copia = [...cart] 
        copia.forEach((producto) => {
            producto.id === item.id && (producto.cantidad += cantidad)
        });
    }

    const deleteProd =(id) => {
        const itemFiltrado = cart.filter((producto) => producto.id !== id)
        setCart(itemFiltrado); 
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const total = () => {
        const totalCarrito = cart.reduce(
            (prev, curr) => prev + curr.precio * curr.cantidad,
            0 
            );
            return totalCarrito;
    }

    return (
        <CartContext.Provider
            value={{cart, agregarAlCarrito, deleteProd, vaciarCarrito, total}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider