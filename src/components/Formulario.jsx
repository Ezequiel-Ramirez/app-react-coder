import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import contexto from "../contexto"
import { useContext } from 'react'
import { Alert } from 'bootstrap'

const Formulario = () => {
    const { carrito, nombre, setNombre, telefono, setTelefono, email, setEmail, precioTotal } = useContext(contexto);
    const [error, setError] = useState(false)


    const guardarNombre = (e) => {
        setNombre(e.target.value)
        console.log(nombre);
    }
    const guardarTelefono = (e) => {
        setTelefono(e.target.value)
        console.log(telefono);
    }
    const guardarEmail = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const realizarPedido = (e) => {
        e.preventDefault();
        if (validarCampos) {
            const buyer = { nombre, telefono, email };
            console.log(buyer);
            setError(false)
        } else {
            setError(true)
        }
    }

    const validarCampos = () => {
        if (nombre.trim().length && telefono.trim().length && email.trim().length) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="container">
            {error ? <Alert variant="danger">Por favor complete todos los datos!!!</Alert> : null}
            <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Nombre" onChange={guardarNombre}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control type="tel" placeholder="Ingrese su Teléfono" onChange={guardarTelefono} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Email" onChange={guardarEmail} />
                </Form.Group>
                <Button variant="outline-success" type="submit" onClick={realizarPedido} >
                    Enviar y Finalizar
                </Button>
                <Form.Group></Form.Group>
            </Form>
        </div>
    )
}

export default Formulario
