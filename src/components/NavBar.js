import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () =>
(

    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Shipping</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Productos</Nav.Link>
     
    </Nav>
    <Nav>
      
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