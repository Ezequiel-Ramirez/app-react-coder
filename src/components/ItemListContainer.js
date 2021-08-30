import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router";
import Spinner from 'react-bootstrap/Spinner'
import { firestore } from "../firebase";
import "../style/itemlistcontainer.css";


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    useEffect(() => {
        const db = firestore
        const collection = db.collection("items")

        if (params.id) {
            const filtro = collection.where("categoryId", "==", params.id)
            const query = filtro.get()
            query.then((resultados) => {
                const resultados_parseado = []
                resultados.forEach((documento) => {
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
            }).catch((error) => {
                console.log("Error al cargar los productos, intentá nuevamente" + error);
            }).finally(() => {
                setEstado("terminado");
            });

        } else {
            const query = collection.get()
            query.then((resultados) => {
                const resultados_parseado = []
                resultados.forEach((documento) => {
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
            }).catch((error) => {
                console.log("Error al cargar los productos, intentá nuevamente" + error);
            }).finally(() => {
                setEstado("terminado");
            });
        }


    }, [params.id])
    if (estado === "pendiente") {
        return (
            <>
                <Spinner animation="border" role="status" className="d-block m-auto mt-3" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <>
                <svg className="titulo">
                    <text x="5%" y="75%" className="titulo-primario" >{greeting}</text>
                </svg>
                <ItemList productos={productos} />
            </>
        )
    }
}
export default ItemListContainer