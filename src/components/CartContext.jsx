import { useState } from "react";
import { Provider } from "../contexto"


const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0);

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
        setCarrito(carrito.filter(item => item.id !== id));
        calcularTotal();

    }
    const clear = () => {
        setCarrito([])
    }
    const calcularTotal = () => {
        let total = "";
        total = Object.values(carrito).reduce((acumulador, { cantidad, price }) => acumulador + cantidad * price, 0);
        setPrecioTotal(total);
    }
    return (
        <Provider value={{ carrito, setCarrito, addItem, removeItem, clear, precioTotal, setPrecioTotal, calcularTotal }}>
            {children}
        </Provider>
    )
}

export default CartContext