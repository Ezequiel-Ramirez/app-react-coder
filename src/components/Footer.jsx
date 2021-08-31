import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
    return (
        <Navbar className="mt-5 p-0 " bg="dark" variant="dark" fixed="bottom" >
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >
                        <img id="logo" src="/img/logo.png" className="d-inline-block align-top" alt="logo" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Text>Política de Privacidad</Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Desarrollado por: <a href="https://www.linkedin.com/in/ezequiel-e-ramirez/" target="blank">Ezequiel Ramirez</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer
