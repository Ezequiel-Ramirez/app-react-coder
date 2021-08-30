import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./itemcount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial)

    const restarContador = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const confirmar = () => {
        if (stock > 0) {
            onAdd(contador)
        }
    }

    return (

        <div className="divContador">
            <div className="divContadorInternos">
                <button onClick={restarContador}>-</button>
                <p>Cantidad: {contador}</p>
                <button onClick={sumarContador}>+</button>
            </div>
            <div className="divContadorInternos">
                <button onClick={confirmar}>Confirmar</button>
            </div>
        </div>

    )
}

export default ItemCount
