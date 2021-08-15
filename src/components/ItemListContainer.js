import React, { useEffect, useState } from "react";
import { prod } from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router";
import Spinner from 'react-bootstrap/Spinner'
import "./itemlistcontainer.css"


const ItemListContainer = ({ greeting }) => {


    const [productos, setProductos] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    console.log(params)

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                if (params.id) {
                    resolve(prod.filter(producto => producto.categoria === params.id))
                } else {

                    resolve(prod)
                }
            }, 2000)
            setEstado("pendiente")
        })
        promesa.then((prod) => setProductos(prod))
            .then(() => setEstado("terminado"))
    }, [params.id])
    if (estado === "pendiente") {
        return (
            <>
                <h1 className="titulo-primario" >{greeting}</h1>
                <Spinner animation="border" role="status" className="d-block m-auto" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    } else {

        return (
            <>
                <h1 className="titulo-primario" >{greeting}</h1>
                <h2>Listado de Nuestros Productos:</h2>
                <ItemList productos={productos} />

            </>
        )
    }

}
export default ItemListContainer