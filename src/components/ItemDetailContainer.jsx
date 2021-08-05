import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        
        getItem();
        
        
    },)
    const getItem = () =>{
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then((prod)=>setProducto(prod));
        },2000)
        
    }
   

    return (
        <div>
             <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer
