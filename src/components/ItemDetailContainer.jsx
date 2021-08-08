import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                const pedido = fetch('https://fakestoreapi.com/products/1')
                pedido.then((respuesta) => {
                    return respuesta.json()
                })
                    .then((transformacion) => {
                        res(transformacion)
                    })
            }, 2000)
        })
        getItem.then((data_product) => {
            setProducto(data_product)
        })
    }, [])
    console.log(producto)

    return (
        <div>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer
