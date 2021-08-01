import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount"
import {prod} from "./productos"
import ItemList from "./ItemList"
import "./itemlistcontainer.css"


const ItemListContainer = ({greeting}) =>{
    const onAdd = (cantidad) =>{
        console.log(cantidad)
    }

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(productos)
        },2000)
    })
    promesa.then((productos)=>{
        setProductos(prod)
    })
    },[])

    return(
<>
    <h1 style={{color:'red'}}>Hola!! {greeting}</h1>
    <p>Esta es nuestra tienda donde encontrara diferentes productos para su casa</p>
    <ItemList productos={productos}/>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
</>
    )
}
export default ItemListContainer