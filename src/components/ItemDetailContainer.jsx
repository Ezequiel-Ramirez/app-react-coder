import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router";
import { firestore } from "../firebase";
import "../style/itemlistcontainer.css";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    useEffect(() => {
        const db = firestore
        const collection = db.collection("items")

        if (params.id) {
            const filtro = collection.doc(params.id)
            const query = filtro.get()
            query.then((resultados) => {
                const id = resultados.id
                const data = resultados.data()
                const data_final = { id, ...data }
                setProducto(data_final)
            }).catch((error) => {
                console.log("Error al cargar los productos, intentá nuevamente" + error);
            }).finally(() => {
                setEstado("terminado");
            });

        } else {
            setEstado("terminado")
        }
    }, [params.id])

    if (estado === "pendiente") {
        return (
            <div>
                <svg className="titulo">
                    <text x="5%" y="75%"  >Detalle:</text>
                </svg>
                <Spinner animation="border" role="status" className="d-block m-auto" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } else {
        return (
            <div>
                <svg className="titulo">
                    <text x="5%" y="75%"  >Detalle:</text>
                </svg>
                <ItemDetail item={producto} />
            </div>
        )
    }
}

export default ItemDetailContainer
