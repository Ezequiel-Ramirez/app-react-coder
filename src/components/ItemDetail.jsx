import { useState, useContext } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from "./ItemCount"
import { LinkContainer } from 'react-router-bootstrap'
import contexto from "../contexto"
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar} from '@fortawesome/free-solid-svg-icons'
import "../style/itemdetail.css";

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState()
    const { carrito, addItem } = useContext(contexto);

    let cantidad;
    let isInCart = carrito.find((producto) => producto.id === item.id);
    if (isInCart) {
        cantidad = parseInt(carrito.filter((producto) => producto.id === item.id).map((producto) => producto.cantidad));
    } else {
        cantidad = parseInt(item.cantidad);
    }

    const onAdd = (cantidad) => {
        setUnidades(cantidad)
    }

    if (unidades > 0) {
        return (
            <Container>
                <Row>
                    <Col className="md-8">
                        <CardColumns>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h1>{item.title}</h1>
                                    </Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Text>ID: {item.id}</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </Col>
                    <Col className="md-4">
                        <Card>
                            <Card.Body>
                                <Card.Text className="fs-3">
                                    {item.description}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{item.info}</Card.Subtitle>
                                <h3>$ {item.price}</h3>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStarHalfAlt}  className="iconoStar"/>
                                <ItemCount stock={item.stock} cantidad={cantidad} addItem={() => addItem(item, unidades)} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                            </Card.Body>
                            <LinkContainer to="/cart"><Button variant="success" onClick={() => addItem(item, unidades)}>Agregar al Carrito</Button></LinkContainer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row>
                    <Col className="md-8">
                        <CardColumns>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h1>{item.title}</h1>
                                    </Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Text>ID: {item.id}</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </Col>
                    <Col className="md-4">
                        <Card>
                            <Card.Body>
                                <Card.Text className="fs-3">
                                    {item.description}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{item.info}</Card.Subtitle>
                                <h3>$ {item.price}</h3>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStar}  className="iconoStar"/>
                                <FontAwesomeIcon  icon={faStarHalfAlt}  className="iconoStar"/>
                                <ItemCount stock={item.stock} cantidad={cantidad} addItem={() => addItem(item, unidades)} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ItemDetail
