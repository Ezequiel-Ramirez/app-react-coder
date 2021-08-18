import React, { useState, useContext } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./itemdetail.css"
import ItemCount from "./ItemCount"
import { LinkContainer } from 'react-router-bootstrap'
import contexto from "../contexto"

const ItemDetail = ({ item }) => {
    /* estado de las unidades del carro */
    const [unidades, setUnidades] = useState()
    const { carrito, addItem } = useContext(contexto);


    let cantidad;
    let yaExiste = carrito.find((producto) => producto.id === item.id);
    if (yaExiste) {
        cantidad = parseInt(carrito.filter((producto) => producto.id === item.id).map((producto) => producto.cantidad));      
        //console.log(`esto es itemdetail, ${producto.nombre} ya está en el carrito y su cantidad es ${cantidad}`);
    } else {
        cantidad = parseInt(item.cantidad);      
        //console.log(`esto es itemdetail, la cantidad de ${producto.nombre} es ${cantidad} pero aun no se argegó al carrito`);
    }
    /* funcion donde actualizo las unidades */
    const onAdd = (cantidad) => {
        console.log("State uplifting")
        console.log("Recibi la cantidad de un componente hijo")
        console.log(cantidad)
        setUnidades(cantidad)
        console.log(unidades)
        /* 
        const item_para_agregar = {
            item : item,
            quantity : cantidad
        }
        addItem(item_para_agregar)
        */

    }
    console.log(carrito);
    if (unidades > 0) {
        return (
            <>
                <CardColumns>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{item.title}</h1>
                            </Card.Title>
                            <Card.Subtitle>{item.category}</Card.Subtitle>
                            <Card.Img className="cardImg" variant="top" src={item.picturUrl} />
                            <Card.Text>ID: {item.id}</Card.Text>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <h5>$ {item.price}</h5>
                            {/* actualizo el estado del unidades y muestro el boton terminar compra */}
                            <ItemCount stock={item.stock} cantidad={cantidad} addItem={() => addItem(item, unidades)} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                            <LinkContainer to="/cart"><Button onClick={() => addItem(item, unidades)}>Terminar mi Compra</Button></LinkContainer>

                        </Card.Body>
                    </Card>
                </CardColumns>
            </>
        )
    } else {
        return (
            <>
                {/* en caso de que no termine la compra no muestro el boton terminar ni actualizo las unidades */}
                <CardColumns>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{item.title}</h1>
                            </Card.Title>
                            <Card.Subtitle>{item.category}</Card.Subtitle>
                            <Card.Img className="cardImg" variant="top" src={item.picturUrl} />
                            <Card.Text>ID: {item.id}</Card.Text>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <h5>$ {item.price}</h5>
                            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                        </Card.Body>
                    </Card>
                </CardColumns>
            </>
        )
    }

}

export default ItemDetail
