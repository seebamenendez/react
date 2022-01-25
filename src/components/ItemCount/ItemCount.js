import React,{useState} from 'react'

function ItemCount({ stock, onAdd }) {

    const initial = 0

    const [contador, mueveContador] = useState(initial);

    const sumarCompra = () => {
        contador < stock
            ? mueveContador(prev => prev + 1)
            : alert("Stock máximo disponible.");
    };

    const restarCompra = () => {
        contador > initial &&
            mueveContador(prev => prev - 1);
    };

    return (
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} >
            <h1 > {contador}   </h1>
            <button onClick={restarCompra} > - </button>
            <button onClick={() => onAdd(contador)} disabled={contador < 1 && 'disabled'}> Agregar al Carrito </button>
            <button onClick={sumarCompra} > + </button>
        </div>
    )
}
export default ItemCount