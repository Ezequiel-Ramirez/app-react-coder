import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/1')
            .then(respuesta=>respuesta.json())
            .then(json=>console.log(json))
            .then((prod)=>{setProducto(prod)})
        },2000)
    },[])
    const getItems = () =>{
        return(producto);
        
    }

    return (
        <div>
             <ItemDetail productos={getItems()}/>
        </div>
    )
}

export default ItemDetailContainer
