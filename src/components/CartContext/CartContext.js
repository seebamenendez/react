import { useState, useContext, createContext } from 'react';

export const cartContext = createContext([]);

export function useCartContext() {
    return useContext(cartContext)
}


export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    //AgregaralCarrito viene de itemdetail
    function agregarAlCarrito(items) {
        
        const indice=cartList.findIndex(i => i.id === items.id) // 0,1,2
      
        if (indice > -1){
            const qtyVieja=cartList[indice].cantidad

            let qtyNueva= qtyVieja + items.cantidad

            cartList[indice].cantidad = qtyNueva
            
            let arrAux = [...cartList]
    
            setCartList(arrAux)

        }else{
           setCartList([...cartList, items])
        }
   }

    const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
    }

    const borrarItem = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
    }

    
    const cantidadItem = () =>{
        console.log(cartList)
        return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }

    function vaciarCarrito() {
        setCartList([])
    }

    return (
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            precioTotal,
            borrarItem,
            cantidadItem

            }} >
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider