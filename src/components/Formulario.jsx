import React, { useState } from 'react'
import contexto from "../contexto"
import { useContext } from 'react'
import { firestore } from "../firebase";
import firebase from 'firebase/app';
import './form.css'



const Formulario = () => {
    const { carrito, nombre, setNombre, telefono, setTelefono, email, setEmail, precioTotal, clear } = useContext(contexto);
    const [error, setError] = useState(false);
    const [orderId, setOrderId] = useState();
    const [procesado, setProcesado] = useState(false);

    //Referencia a la DB
    const db = firestore
    //Referencia a una coleccion
    const orders = db.collection("orders");


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
        if (validarCampos()) {
            const newOrder = {
                buyer: { nombre, telefono, email },
                items: carrito,
                fecha: firebase.firestore.Timestamp.fromDate(new Date()),
                total: precioTotal,
            };

            orders.add(newOrder).then(({ id }) => {
                setOrderId(id); // succes
                console.log(orderId);
                setError(false)
                setProcesado(true)
                clear();
            }).catch(error => {
                setError(error); // error
            }).finally(() => {
                setError(false)
                setEmail("");
                setNombre("");
                setTelefono("");
            })
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
            <div className="row mt-5">
                <div className="col-md-6 p-3">
                    <form className="formCart">
                        {error ? <p className="msjError">Por favor complete todos los datos!!!</p> : null}
                        <label >Nombre:</label>
                        <input type="text"  placeholder="Ingrese su Nombre" id="nombre" onChange={guardarNombre} />
                        <label >Teléfono:</label>
                        <input type="tel" placeholder="Ingrese su Teléfono" id="telefono" onChange={guardarTelefono} />
                        <label >Email:</label>
                        <input type="email" placeholder="Ingrese su Email" id="email" onChange={guardarEmail} />
                        {
                            carrito.length === 0 ?
                                <button type="submit" onClick={realizarPedido} disabled >Enviar y Finalizar</button>
                                : <button type="submit" onClick={realizarPedido}  >Enviar y Finalizar</button>}
                    </form>
                </div>
                {
                    procesado ?
                        <div className="col-md-6">

                            <h3>Su compra ha sido procesada por un total de $ {precioTotal}</h3>


                            <h4 className="orden">Número de orden: <span> {orderId}</span></h4>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Formulario
