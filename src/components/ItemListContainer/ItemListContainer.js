import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../productos';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer({greeting}) {  
    const [productos, setProductos] = useState([])   
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)

    const {idCategoria} = useParams()

    useEffect(() => {       
        
        const db = getFirestore()
        if (idCategoria) {
            const queryCollection = query( 
                    collection(db, 'items') ,
                    where('categoria', '==', idCategoria)               
                )      

            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) )) // []
            .catch(err => err)
            .finally(()=> setLoading(false))
        } else {            
            const queryCollection = collection(db, 'items')                  
            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) )) // []
            .catch(err => err)
            .finally(()=> setLoading(false))             
        }       
    }, [idCategoria])
    
    //ejemplo de evento
   const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setProductos([
            ...productos,
            { id: "8", name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
        ])
    }
    console.log('itemlistcontainer')
    console.log(productos)
    //console.log(producto)
    //[1,2,3,4] => [<li>1</li>, ....]
    return (
        <div>
            <h2>{greeting}</h2> 
            <button onClick={handleClick}>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button>  
            { loading ? 
                    <h2> Cargando ... </h2> 
                : 
                    <ItemList productos={productos} />
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