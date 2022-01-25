import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FinalizarCompra = (opcion) => {
    return (
        <div>
            <Link to='/cart'><Button>Terminar la Compra</Button></Link>
            <Link to={`/`}><Button>Agregar mas productos</Button></Link>
        </div>
    )
}

export default FinalizarCompra