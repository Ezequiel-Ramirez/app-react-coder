import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { LinkContainer } from 'react-router-bootstrap'
import "./item.css"

const Item = ({ product }) => {
    return (
        <>
            <Col md= "4">
                <Card  className="text-center mt-3">
                    <Card.Img variant="top" src={product.picturUrl} />
                    <Card.Body>
                        <Card.Title className="fs-2">{product.title}</Card.Title>
                        <Card.Text className="cardText" >
                            {product.description}
                        </Card.Text>
                        <Card.Text className="cardTextPrice">$ 
                            {product.price}
                        </Card.Text>
                        <LinkContainer to={`/item/${product.id}`}><Button variant="primary">Ver Detalle</Button></LinkContainer>
                        
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item
