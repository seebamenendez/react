import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {
    collection, 
    getDocs, 
    getFirestore, 
    query, 
    where 
} from 'firebase/firestore';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])   
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() => {       
        
        const db = getFirestore()
        if (idCategoria) {   
            const queryCollection = query( 
                    collection(db, 'items') ,
                    where('categoria', '==', idCategoria)               
                );    
                getDocs(queryCollection)
                .then((res) => setProductos(res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) )) // []
                .catch(err => err)
                .finally(()=> setLoading(false)) 
    
        } else {            
            const queryCollection = collection(db, 'items')                  
            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) )) // []
            .catch(err => err)
            .finally(()=> setLoading(false))             
        }        
    }, [idCategoria]);

    

    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <div>
                    <h2 style={{ textAlign: 'center' }}>{greeting}</h2>
                    <ItemList productos={productos} />
                </div>
            )}
        </div>
    )
}

export default ItemListContainer