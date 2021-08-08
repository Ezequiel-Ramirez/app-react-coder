import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"


const NavBar = () =>
(

  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to="/" >Center Bike</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link> <Link to="/category/1"> Masculino </Link></Nav.Link>
          <Nav.Link> <Link to="/category/2"> Femenino </Link></Nav.Link>
          <Nav.Link> <Link to="/category/3"> Infantil </Link></Nav.Link>
            

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