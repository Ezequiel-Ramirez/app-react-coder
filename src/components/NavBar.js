import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'

const NavBar = () =>
(

    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#">Center Bike</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#">Nosotros</Nav.Link>
      <Nav.Link href="#">Productos</Nav.Link>
     
    </Nav>
    <Nav>
    <CartWidget/>
      <Nav.Link eventKey={2} href="#memes">
        Carrito
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </>
)

export default NavBar