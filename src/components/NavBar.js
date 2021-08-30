import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { LinkContainer } from 'react-router-bootstrap'
import '../style/navBar.css'


const NavBar = () =>
(

  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
      <Container >
        <LinkContainer to="/">
          <Navbar.Brand >
            <img id="logo" src="/img/logo.png" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to="/category/1"><Nav.Link className="menu fs-3"> Masculino </Nav.Link></LinkContainer>
            <LinkContainer to="/category/2"><Nav.Link className="menu fs-3"> Femenino </Nav.Link></LinkContainer>
            <LinkContainer to="/category/3"><Nav.Link className="menu fs-3"> Infantil </Nav.Link></LinkContainer>
          </Nav>
          <Nav>
            <CartWidget />
            <LinkContainer to="/Cart">
              <Nav.Link className="menu fs-3">
                Carrito
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
)

export default NavBar