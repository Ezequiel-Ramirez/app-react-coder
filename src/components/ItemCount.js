import {useState} from 'react';
import "./itemcount.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial, onAdd}) => {
const [contador, setContador] = useState(initial)

const restarContador = () =>{
    if (contador > initial) {
        setContador(contador -1);
    }
}

const sumarContador = () => {
    if (contador < stock ) {
        setContador(contador +1);
    }
}

const confirmar = () => {
    if(stock > 0){
        onAdd(contador)
    }
}

    return (
        <>
        <div className="divContador">
            <button onClick={restarContador}>-</button>
            <p>Cantidad: {contador}</p>
            <button onClick={sumarContador}>+</button>
                <div>
                    <button onClick={confirmar}>Confirmar</button>
                </div>
        </div>
        </>
    )
}

export default ItemCount
