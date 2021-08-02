import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const Item = ({ product }) => {




    return (
        <>
            <Col md= "4">
                <Card  className="text-center mt-3" style={{ background: 'lightgray' }}>
                    <Card.Img variant="top" src={product.picturUrl} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text style={{ color: 'black' }}>
                            {product.description}
                        </Card.Text>
                        <Card.Text style={{ color: 'green' }}>
                            {product.price}
                        </Card.Text>
                        <Button variant="primary">Ver Detalle</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item
