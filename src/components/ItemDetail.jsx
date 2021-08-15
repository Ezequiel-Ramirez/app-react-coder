import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./itemdetail.css"
import ItemCount from "./ItemCount"
import { LinkContainer } from 'react-router-bootstrap'

const ItemDetail = ({item}) => {

    const [unidades, setUnidades] = useState()

    const onAdd = (cantidad) =>{
        console.log("State uplifting")
        console.log("Recibi la cantidad de un componente hijo")
        console.log(cantidad)
        setUnidades(cantidad)
        console.log(unidades)
    }

    if (unidades > 0) {
        return (
            <>
                <CardColumns>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{item.title}</h1>
                            </Card.Title>
                            <Card.Subtitle>{item.category}</Card.Subtitle>
                            <Card.Img className="cardImg" variant="top" src={item.picturUrl}  />
                            <Card.Text>ID: {item.id}</Card.Text>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <h5>$ {item.price}</h5>
                            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1:0} onAdd={onAdd}/>
                            <LinkContainer to="/cart"><Button>Terminar mi Compra</Button></LinkContainer>
                            
                        </Card.Body>
                    </Card>
                </CardColumns>
            </>
        )
    } else {
        return (
            <>
                <CardColumns>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{item.title}</h1>
                            </Card.Title>
                            <Card.Subtitle>{item.category}</Card.Subtitle>
                            <Card.Img className="cardImg" variant="top" src={item.picturUrl}  />
                            <Card.Text>ID: {item.id}</Card.Text>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <h5>$ {item.price}</h5>
                            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1:0} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </>
        )
    }
    
}

export default ItemDetail
