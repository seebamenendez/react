import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../productos';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer ({ greeting }) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {idCategoria} = useParams();
    //lo deja al codigo para cargar al final
    useEffect(() => {
        if (id) {
            const db = getFirestore();
            const queryProducts = query(
                collection(db, 'products'),
                where('category', '==', id)
            );
            getDocs(queryProducts).then((res) =>
                setData(
                    res.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            );
            setLoading(false);
        } else {
            const db = getFirestore();
            const queryProducts = collection(db, 'products');
            getDocs(queryProducts).then((res) =>
                setData(
                    res.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            );
            setLoading(false);
        }      
    }, [idCategoria]);
        
    console.log(idCategoria);

    return (
        <div>
            <h2>{greeting}</h2> 
            { loading ? 
                    <h6> Cargando ... </h6> 
                : 
                    <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer


/* if (idCategoria) {
            getFetch
        .then(resp => setProductos(resp.filter(prod => prod.coleccion === idCategoria)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        } else {
            getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        }
        //Para poder mostrar bien que es lo que trae la promesa */