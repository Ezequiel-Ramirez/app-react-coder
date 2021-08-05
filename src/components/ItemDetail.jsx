import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <article className="item">
        <h3>{item.title}</h3>
        <h3>{item.category} </h3>
        <h5>{item.description}</h5>
        <h5>{item.price}</h5>
           
        </article>
    )
}

export default ItemDetail
