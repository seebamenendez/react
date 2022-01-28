import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
//import { getMock } from '../../productos'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { detalleId } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const queryProd = doc(db, 'products', id);
        getDoc(queryProd).then((resp) => {
            setProduct({ id: resp.id, ...resp.data() });
        });
        setLoading(false);

    }, [detalleId])
    

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer



/* getMock
            .then(res => setProduct(res.find(prod => prod.id === detalleId))) */