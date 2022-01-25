import React from 'react';
import Item from '../ItemListContainer/Item'

function ItemList ({productos}) {
    return (
        <>
            {productos.map(prod => <Item prod={prod} key={prod.id} /> )
            }
        </>
    )
}

export default ItemList