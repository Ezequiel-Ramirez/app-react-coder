import { useContext, useEffect } from 'react'
import contexto from "../contexto"
import "../style/itemCart.css"


const ItemCart = ({ product }) => {
    const { removeItem, calcularTotal } = useContext(contexto);
    let subtotal = product.price * product.cantidad;
    useEffect(() => {
        calcularTotal();
    }, [calcularTotal])


    return (
        <li className="listaCarro">
            <img className="imgCarro" src={product.image} alt="{product.title}"></img>
            <p>Nombre: {product.title}  -  Precio unitario: ${product.price}  -  Unidades: {product.cantidad}  -  Precio Total: $ {subtotal}</p>
            <button onClick={() => removeItem(product.id)}>X</button>
        </li>
    )
}

export default ItemCart
