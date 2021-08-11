import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount"
import {prod} from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router";
import "./itemlistcontainer.css"


const ItemListContainer = ({greeting}) =>{
    const onAdd = (cantidad) =>{
        console.log(cantidad)
    }

    const [productos, setProductos] = useState([])
    const params = useParams()

    console.log(params)

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
            if (params.id) {
                resolve(prod.filter(producto=>producto.categoria === params.id))
            } else {
                
                resolve(prod)
            }
        },2000)
    })
    promesa.then((prod)=>{
        setProductos(prod)
    })
    },[params.id])

    return(
<>
    <h1 className="titulo-primario" >{greeting}</h1>
    <ItemList productos={productos} />
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
</>
    )
}
export default ItemListContainer