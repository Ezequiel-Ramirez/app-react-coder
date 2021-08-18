import React, { useContext } from 'react'
import contexto from "../contexto"
import "./itemCart.css"


const ItemCart = ({ product }) => {
    const { removeItem, calcularTotal } = useContext(contexto);
    let subtotal = product.price * product.cantidad;
    calcularTotal();
    

    return (
        <li className="listaCarro">
            <img className="imgCarro" src={product.picturUrl} alt="{product.title}"></img>
            <p>Producto: {product.title} - Precio unitario: ${product.price} - Unidades: {product.cantidad} - Precio Total: $ {subtotal}</p>
            <button onClick={() => removeItem(product.id)}>X</button>
        </li>
    )
}

export default ItemCart
