import { useCartContext } from "../CartContext/CartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Link } from 'react-router-dom';
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra";


const Cart = () => {
    const { cartList, vaciarCarrito, precioTotal, FinalizarCompra } = useCartContext ()
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        nombre: '',
        telefono: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()   
         // Nuevo objeto de orders    
        let orden = {}
        //orden.date = Timestamp.fromDate(new Date())        

        orden.buyer = dataForm // {name, email, phone}
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

        const ordenCollection = collection(db, 'items')
        await addDoc(ordenCollection, orden) // setDoc
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        

        // actualizar stock
        const queryCollection = collection(db, 'items')

        //console.log(cleccionNoti)
        const queryActualizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActualizarStock)
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
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    
    return (
    
    <>
        {cartList.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "30vh",
            }}
          >
            <h2>Aún no agregaste productos al carrito</h2>
            <Link to="/">
              <button className="detail">Ir al catálogo</button>
            </Link>
          </div>
        ) : (
          <>
            {cartList?.map((prod) => (
              <div key={prod.id} className="border border-secondary">
                <img
                  src={prod.img}
                  alt={prod.nombre}
                  style={{ width: "220px", margin: "5px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h6>{prod.nombre}</h6>
                  <h6>${prod.precio} C/U</h6>
                  <h6>Cantidad: {prod.cantidad}</h6>
                  <button onClick={() => vaciarCarrito(prod.id)}>X</button>
                </div>
              </div>
            ))}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <div style={{
                  textAlign: "right",
                  margin: "4px 25px",
                }}>
              <h3>
                El total es: ${precioTotal()}
              </h3>
                <Link to={`/finalizarcompra`}>                                         
                    <button>Finalizar Compra</button> 
                </Link>
            </div>
          </>
        )}
      </>
      
    );
}


export default Cart



