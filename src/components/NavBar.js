import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = () =>
(

  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
      <Container >
        <LinkContainer to="/">
          <Navbar.Brand >Center Bike</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to="/category/1"><Nav.Link> Masculino </Nav.Link></LinkContainer>
            <LinkContainer to="/category/2"><Nav.Link> Femenino </Nav.Link></LinkContainer>
            <LinkContainer to="/category/3"><Nav.Link> Infantil </Nav.Link></LinkContainer>
          </Nav>
          <Nav>
            <CartWidget />
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