import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMock } from '../../productos'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { detalleId } = useParams()

    useEffect(() => {
        getMock
            .then(res => setProduct(res.find(prod => prod.id === detalleId)))

    }, [detalleId])
    console.log(detalleId)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
