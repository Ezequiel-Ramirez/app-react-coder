import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'


const ItemDetail = ({item}) => {
    return (
        <>
            <CardColumns>
                <Card>
                    <Card.Body>
                        <Card.Title><h1>{item.title}</h1>
                        </Card.Title>
                        <Card.Subtitle>{item.category}</Card.Subtitle>
                        <Card.Img variant="top" src={item.picturUrl} style={{ width: '20%', margin: 'auto', display: 'block' }} />
                        <Card.Text>ID: {item.id}</Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <h5>$ {item.price}</h5>
                    </Card.Body>
                </Card>
            </CardColumns>
        </>
    )
}

export default ItemDetail
