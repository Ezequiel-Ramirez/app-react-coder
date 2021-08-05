import React from 'react'

const ItemDetail = (item) => {
    return (
        <>
        
        <h3>{item.title}</h3>
        <h3>{item.category} </h3>
        <h5>{item.description}</h5>
        <h5>{item.price}</h5>
           
        
        </>
    )
}

export default ItemDetail
