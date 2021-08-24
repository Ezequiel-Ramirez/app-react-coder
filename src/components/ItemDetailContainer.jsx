import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemDetailContainer = () => {
    /* estado de los productos a mostrar que inicia vacío */
    const [producto, setProducto] = useState([])
    /* estado para mostrar el loading */
    const [estado, setEstado] = useState("pendiente");
    /* parametro que recibe al renderizar el contenido */
    const params = useParams()
    console.log(params)
    console.log(params.id)

    useEffect(() => {
        //Referencia a la DB
        const db = firestore
        //Referencia a una coleccion
        const collection = db.collection("items")

        if (params.id) {
            const filtro = collection.doc(params.id)
            console.log(filtro)
            const query = filtro.get()
            console.log(query)
            query.then((resultados) => {
                console.log(resultados)

                //el id esta separado del resto de la data
                const id = resultados.id
                const data = resultados.data()
                console.log(data)
                const data_final = { id, ...data }
                setProducto(data_final)
                setEstado("terminado")
            })

        } else {

            console.log("Producto no encontrado")
            setEstado("terminado")

        }


    }, [params.id])
    console.log(producto)


    if (estado === "pendiente") {
        return (

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
