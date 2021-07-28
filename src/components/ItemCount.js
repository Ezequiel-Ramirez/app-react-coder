import {useState} from 'react';

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
        <div>
            <button onClick={restarContador}>-</button>
            <p>Cantidad: {contador}</p>
            <button onClick={sumarContador}>+</button>
            <button onClick={confirmar}>Confirmar</button>
        </div>
    )
}

export default ItemCount
