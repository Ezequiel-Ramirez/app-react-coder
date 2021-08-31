import { useState } from "react";
import { Provider } from "../contexto"
import { firestore } from "../firebase";
import firebase from 'firebase/app';

const CartContext = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0);
    const [badge, setBadge] = useState("");
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");

    const db = firestore
    const orders = db.collection("orders");
    

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
        const total = Object.values(carrito).reduce((acumulador, { cantidad, price }) => acumulador + cantidad * price, 0);
        setPrecioTotal(total);
        setBadge(carrito.length);
    }
    async function upToDayStock() {
        const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(i => i.id));
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        query.docs.forEach((itemActualizable, itemid) => {
            batch.update(itemActualizable.ref, { stock: itemActualizable.data().stock - carrito[itemid].cantidad });
        })
        await batch.commit().then(r => r);
    }

    const dataOrder = (id) =>{
        const filtro = orders.doc(id)
        const query = filtro.get()
        query.then((resultados) => {
            const id = resultados.id
            const data = resultados.data()
            const data_order = { id, ...data }
            setData(data_order)
        })
    }

    return (
        <Provider value={{ carrito, setCarrito, addItem, removeItem, clear, precioTotal, setPrecioTotal, calcularTotal, badge, nombre, setNombre, telefono, setTelefono, email, setEmail, upToDayStock, dataOrder, data, setData }}>
            {children}
        </Provider>
    )
}

export default CartContext
