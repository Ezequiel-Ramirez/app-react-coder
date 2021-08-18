import contexto from "../contexto"
import { useContext } from 'react'
import { Container } from "react-bootstrap";
import ItemCart from "./ItemCart";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import "./cart.css"


const Cart = () => {
    const { carrito, clear, precioTotal } = useContext(contexto);

    console.log(carrito)
    return (
        <Container fluid >
            <h2>Carrito de compras</h2>
            <ul>
                {carrito.length > 0 ? carrito.map(product => { return <ItemCart product={product} key={product.id} /> }) : <article><div className="sinstock_nohay">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/`}><span className="sin_items">Tienda</span></Link></div></article>}

            </ul>
            {carrito.length > 0 ?
                <div className="total"><div className="importe__total"><p>Total a Pagar: $<span> {precioTotal}</span></p></div></div>: null
            }
            
            {carrito.length > 0 ? <Button variant="danger" className="mt-5" onClick={clear}>Limpiar Carrito</Button> : null}
            {carrito.length > 0 ? <Link to={`/`}> <Button variant="success" className="mt-5" >Seguir Comprando</Button> </Link> : null}


        </Container>
    )
}

export default Cart
