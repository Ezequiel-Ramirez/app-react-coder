import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart"
import Formulario from "./components/Formulario"
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "./components/CartContext";


const App = () => {
  return (
    <CartContext>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/category/:id" >
            <ItemListContainer />
          </Route>
          <Route path="/category/:id" exact>
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a mi tienda On-Line" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/formulario">
            <Formulario></Formulario>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
};
export default App;
