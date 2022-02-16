import {memo} from 'react'
import Item from '../ItemListContainer/Item'

const ItemList = memo( ( {productos} )=> {
    console.log('itemList')
    return (
        <>
            { productos.map(prod => <Item prod={prod} key={prod.id}/>  ) }
        </>
    )
}
, (oldProps, newProps)=> oldProps.productos.lenght === newProps.productos.lenght)

export default ItemList
