import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div>
            <ul>
                {productos.map(product=>{ return <Item product={product} key={product.id}/>})}
            </ul>
        </div>
    )
}

export default ItemList
