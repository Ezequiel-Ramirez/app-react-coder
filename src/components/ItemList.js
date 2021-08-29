import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ItemList = ({ productos }) => {
    return (
        <Container >
            <Row>
                {productos.map(product => { return <Item product={product} key={product.id} /> })}
            </Row>
        </Container>
    )
}
export default ItemList
