import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap'
import { useContext } from 'react';
import contexto from "../contexto";
import "../style/cartWidget.css"

const CartWidget = () => {
const { badge, carrito } = useContext(contexto);

return (
<>
    {carrito.length > 0 ? <Badge className="m-auto" pill bg="danger">{badge}</Badge> : null}
    <FontAwesomeIcon  icon={faShoppingCart} className="iconoCart" />
</>
)
}
export default CartWidget
