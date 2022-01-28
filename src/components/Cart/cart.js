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
                        <div key={prod.id} className="fluid-container">
                            <img src={prod.foto} alt={prod.nombre} style={{ maxWidth: '12rem' }} />
                            <div>
                                <h6>{prod.nombre}</h6>
                                <h6>${prod.precio}</h6>
                                <h6>Cantidad: {prod.cantidad}</h6>
                                <div>
                                <button onClick={() => deleteProd(prod.id)}>
                                    X
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <h6>Total: ${total()}</h6>
                </>
            )}
        </>
    );
};

export default Cart
