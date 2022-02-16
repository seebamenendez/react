import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RealizarCompra = (opcion) => {
    return (
        <div>
            <p><Link to='/cart'><Button className="btn btn-secondary">Ir al carrito</Button></Link></p>
            <Link to={`/`}><Button className="btn btn-secondary">Agregar mas productos</Button></Link>
        </div>
    )
}


export default RealizarCompra