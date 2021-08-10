import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
import {prod} from "./productos"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const params = useParams()
    console.log(params)

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                if (params.id) {
                    res(prod.filter(producto=>producto.id === params.id))
                } else {
                    
                    res(console.log("Producto no encontrado"))
                }
            }, 2000)
        })
        getItem.then((data_product) => {
            setProducto(data_product)
        })
    }, [])
    console.log(producto)

    return (
        <div>
        <h3>Detalle de Producto:</h3>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer
