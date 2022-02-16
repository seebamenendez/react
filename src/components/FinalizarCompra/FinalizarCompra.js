import { useState } from 'react'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useCartContext } from "../CartContext/CartContext"
import Resumen from '../Resumen/Resumen'

export const FinalizarCompra = (opcion) => {
    
    const { cartList, vaciarCarrito, precioTotal } = useCartContext ()
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizaCompra = async (e) => {
        e.preventDefault()   

         // Nuevo objeto de orders    
        let orden = {}     

        orden.buyer = dataForm 
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        // guardar la orden en firestore
        const db = getFirestore()

        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden) // setDoc
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        

        const queryCollection = collection(db, 'items')

        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCondicional(true)    
    }

    function handleChange(e) {

        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    
    return (
        <div>  
            {
                condicional  ? 
                    <Resumen idOrden={idOrden} />
                : 
                    <>
                        {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cant: {prod.cantidad}</li>)}
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <form 
                            onSubmit={realizaCompra} 
                        >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='Nombre y Apellido' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='telefono' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button>Generar Orden</button>
                        </form>

                    </>

            }          
        </div>
    )
}



export default FinalizarCompra

