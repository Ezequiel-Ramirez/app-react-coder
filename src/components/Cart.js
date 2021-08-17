import contexto from "../contexto"
import { useContext } from 'react'


const Cart = () => {
    const {carrito, removeItem, clear} = useContext(contexto);
   
    console.log(carrito)
    return (
        <div>
            
           
        </div>
    )
}

export default Cart
