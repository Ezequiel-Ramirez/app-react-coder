import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) =>{
    const onAdd = (cantidad) =>{
        console.log(cantidad)
    }
    return(
<>
    <h1 style={{color:'red'}}>Hola!! {greeting}</h1>
    <p>Esta es nuestra tienda donde encontrara diferentes productos para su casa</p>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
</>
    )
}
export default ItemListContainer