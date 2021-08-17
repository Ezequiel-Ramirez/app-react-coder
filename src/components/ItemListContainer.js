import React, { useEffect, useState } from "react";
import { prod } from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router";
import Spinner from 'react-bootstrap/Spinner'
import "./itemlistcontainer.css"


const ItemListContainer = ({ greeting }) => {

    /* estado de los productos a mostrar que inicia vacío */
    const [productos, setProductos] = useState([])
    /* estado para mostrar el loading */
    const [estado, setEstado] = useState("pendiente");
    /* parametro que recibe al renderizar el contenido */
    const params = useParams()

    console.log(params)

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                if (params.id) {
                    /* si recibe un parametro me lo filtra */
                    resolve(prod.filter(producto => producto.categoria === params.id))
                } else {
                    /* si no recibe un parametro entonces me muestra todos los productos */
                    resolve(prod)
                }
            }, 2000)
            setEstado("pendiente")
        })
        /* actualizo el estado del loading */
        promesa.then((prod) => setProductos(prod))
            .then(() => setEstado("terminado"))
    }, [params.id])
    if (estado === "pendiente") {
        return (
            <>
                {/* muestro el loading segun estado */}
                <h1 className="titulo-primario" >{greeting}</h1>
                <Spinner animation="border" role="status" className="d-block m-auto" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    } else {

        return (
            <>
                {/* oculto el loading segun el estado */}
                <h1 className="titulo-primario" >{greeting}</h1>
                <h2>Listado de Nuestros Productos:</h2>
                <ItemList productos={productos} />

            </>
        )
    }

}
export default ItemListContainer