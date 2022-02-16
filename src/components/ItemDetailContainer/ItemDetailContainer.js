import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
//import { getMock } from '../../productos'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const queryProd = doc(db, 'items', detalleId);
        getDoc(queryProd).then((resp) => {
            setProduct({ id: resp.id, ...resp.data() });
        });
        setLoading(false);
    }, [detalleId]);
   

    return (
        <div>
            {loading ? <h3>Loading...</h3> : <ItemDetail producto={product} />}
        </div>
    )
}

export default ItemDetailContainer



/* getMock
            .then(res => setProduct(res.find(prod => prod.id === detalleId))) */