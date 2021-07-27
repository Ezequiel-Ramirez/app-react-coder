import {useState} from 'react';

const ItemCount = ({stock, initial}) => {
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

    return (
        <div>
            <button onClick={restarContador}>-</button>
            <p>Cantidad: {contador}</p>
            <button onClick={sumarContador}>+</button>
        </div>
    )
}

export default ItemCount
