import { useState } from "react";
import { Provider } from "../contexto"


const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    function addItem(producto, nuevaCantidad) {
        let yaExiste = carrito.find((item) => item.id === producto.id);
        if (yaExiste) {
            if (yaExiste.cantidad === nuevaCantidad) {

                return null;
            } else {
                const newProductos = carrito.map((item) => {
                    if (item.id === producto.id) {
                        return { ...item, cantidad: nuevaCantidad };
                    } return item;
                }
                )
                setCarrito([...newProductos]);

            }
        } else {
            setCarrito([...carrito, { ...producto, cantidad: nuevaCantidad }]);

        }
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }
    const clear = () => {
        setCarrito([])
    }

    return (
        <Provider value={{ carrito, setCarrito, addItem, removeItem, clear }}>
            {children}
        </Provider>
    )
}

export default CartContext
