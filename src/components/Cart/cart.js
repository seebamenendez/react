import React, { useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, deleteProd, vaciarCarrito, total} = useContext(CartContext);
    return (
        <>
            {cart.length === 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '70vh',
                    }}
                >
                    <h2>Aún no agregaste productos al carrito</h2>
                    <Link to="/">
                        <button className="detail">Ir al catálogo</button>
                    </Link>
                </div>
            ) : (
                <>
                    {cart?.map((prod) => (
                        <div key={prod.id} className="containerCart">
                            <img src={prod.foto} alt={prod.nombre} />
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '300px',
                                }}
                            >
                                <h3>{prod.nombre}</h3>
                                <h3>${prod.precio}</h3>
                                <h3>Cantidad: {prod.cantidad}</h3>
                                <button onClick={() => deleteProd(prod.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <h3>{total()}</h3>
                </>
            )}
        </>
    );
};

export default Cart
