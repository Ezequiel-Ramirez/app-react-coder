import { useEffect, useState, useContext } from 'react'
import contexto from "../contexto"
import Spinner from 'react-bootstrap/Spinner'
import { firestore } from "../firebase";
import firebase from 'firebase/app';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../style/checkout.css'

const Checkout = () => {
    const { carrito, nombre, setNombre, telefono, setTelefono, email, setEmail, precioTotal, clear, upToDayStock, dataOrder, data, setData} = useContext(contexto);
    const [error, setError] = useState(false);
    const [orderId, setOrderId] = useState();
    const [procesado, setProcesado] = useState(false);
    const [spiner, setSpiner] = useState(false);

    const db = firestore
    const orders = db.collection("orders");

    const guardarNombre = (e) => {
        setNombre(e.target.value)
    }
    const guardarTelefono = (e) => {
        setTelefono(e.target.value)
    }
    const guardarEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const validarCampos = () => {
        if (nombre.trim().length && telefono.trim().length && email.trim().length) {
            return true
        } else {
            return false
        }
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
                setOrderId(id);
                setError(false)
                setSpiner(true)
                setProcesado(true)
                clear();
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setError(false)
                setEmail("");
                setNombre("");
                setTelefono("");
                upToDayStock();
            });
        } else {
            setError(true)
        }
    }
    useEffect(() => {
        dataOrder(orderId)
        setData("");       
        setTimeout(() => {
            setSpiner(false)
        }, 2000) ;   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [procesado]);

    if (spiner === true) {
        return (
            <>
                <Spinner animation="border" role="status" className="d-block m-auto mt-3" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 p-3">
                        <form className="formCart">
                            {error ? 
                                <><p className="msjError">Por favor complete todos los datos!!!</p>
                                <label >Nombre:</label>
                                <input className="outLine" type="text" placeholder="Ingrese su Nombre" id="nombre" onChange={guardarNombre} />
                                <label >Teléfono:</label>
                                <input className="outLine" type="tel" placeholder="Ingrese su Teléfono" id="telefono" onChange={guardarTelefono} />
                                <label >Email:</label>
                                <input className="outLine" type="email" placeholder="Ingrese su Email" id="email" onChange={guardarEmail} /></>
                                :
                                <>
                                    <label >Nombre:</label>
                                    <input type="text" placeholder="Ingrese su Nombre" id="nombre" onChange={guardarNombre} />
                                    <label >Teléfono:</label>
                                    <input type="tel" placeholder="Ingrese su Teléfono" id="telefono" onChange={guardarTelefono} />
                                    <label >Email:</label>
                                    <input type="email" placeholder="Ingrese su Email" id="email" onChange={guardarEmail} /> </>
                            }
                            {
                                carrito.length === 0 ?
                                    <button type="submit" onClick={realizarPedido} disabled >Enviar y Finalizar</button>
                                    : <button type="submit" onClick={realizarPedido}  >Enviar y Finalizar</button>}
                        </form>
                    </div>
                    {procesado ?
                        <div className="col-md-6 mb-5">
                            <h4 className="orden">Número de orden: <span> {orderId}</span></h4>
                            <h3>Su compra ha sido procesada por un total de $ {precioTotal}</h3>
                            <p className="dataTicket">Datos de Facturación:</p>
                            <h5>Nombre: {data.buyer.nombre}</h5>
                            <h5>Teléfono: {data.buyer.telefono}</h5>
                            <h5>Email: {data.buyer.email}</h5>
                            <h5>Productos: {data.items.map(product => { return <li key={product.id} className="list">{product.title}</li> })}</h5>
                            <h6 className="dataTicket">Gracias por elegirnos!!!</h6>
                            <Link to={`/`}> <Button variant="success" className="mb-5" >Volver a la Tienda</Button> </Link>
                        </div>
                        :
                        <div className="col-md-6">
                            <h3>Complete los datos para proceder con su orden por favor...</h3>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Checkout
