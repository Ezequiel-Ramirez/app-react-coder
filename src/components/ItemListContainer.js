import React, { useEffect, useState } from "react";
/* import { prod } from "./productos" */
import ItemList from "./ItemList"
import { useParams } from "react-router";
import Spinner from 'react-bootstrap/Spinner'
import "./itemlistcontainer.css"
import { firestore } from "../firebase";


const ItemListContainer = ({ greeting }) => {

    /* estado de los productos a mostrar que inicia vacío */
    const [productos, setProductos] = useState([])
    /* estado para mostrar el loading */
    const [estado, setEstado] = useState("pendiente");
    /* parametro que recibe al renderizar el contenido */
    const params = useParams()

    console.log(typeof params)

    useEffect(() => {
        //Referencia a la DB
        const db = firestore
        //Referencia a una coleccion
        const collection = db.collection("items")

        if (params.id) {
            const filtro = collection.where("categoryId", "==", params.id)
            const query = filtro.get()
            console.log(query)
            query.then((resultados) => {
                console.log(resultados)
                const resultados_parseado = []

                //Recorro cada uno de los documentos
                resultados.forEach((documento) => {
                    //el id esta separado del resto de la data
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
                setEstado("terminado")

            })

        } else {
            //Este es mi query
            const query = collection.get()
            console.log(query)
            query.then((resultados) => {
                console.log(resultados)
                const resultados_parseado = []

                //Recorro cada uno de los documentos
                resultados.forEach((documento) => {
                    //el id esta separado del resto de la data
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
                setEstado("terminado")
            })

        }


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