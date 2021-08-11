import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import "./itemdetail.css"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    const onAdd = (cantidad) =>{
        console.log(cantidad)
    }
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
                        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                    </Card.Body>
                </Card>
            </CardColumns>
        </>
    )
}

export default ItemDetail
