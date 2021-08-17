import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router";
import { prod } from "./productos"

const ItemDetailContainer = () => {
    /* estado de los productos a mostrar que inicia vacío */
    const [producto, setProducto] = useState([])
    /* estado para mostrar el loading */
    const [estado, setEstado] = useState("pendiente");
    /* parametro que recibe al renderizar el contenido */
    const params = useParams()
    console.log(params)

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                if (params.id) {
                    /* si recibe un parametro me lo busca por id string */
                    res(prod.find(producto => producto.id === params.id))
                } else {
                    /* en caso que no encuentre el id en el listado */
                    res(console.log("Producto no encontrado"))
                }
            }, 2000)
            setEstado("pendiente")
        })
        getItem.then((data_product) =>
            setProducto(data_product))
            /* actualizo el estado del loading */
            .then(() => setEstado("terminado"))
    }, [params.id])
    console.log(producto)
    if (estado === "pendiente") {
        return (
            /* muestro el producto segun el estado */
            <div>
                <h3>Detalle de Producto:</h3>
                <Spinner animation="border" role="status" className="d-block m-auto" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } else {

        return (
            <div>
                <h3>Detalle de Producto:</h3>
                <ItemDetail item={producto} />
            </div>
        )
    }
}

export default ItemDetailContainer
