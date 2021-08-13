import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart"
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/category/:id" >
          <ItemListContainer  />
        </Route>
        <Route path="/category/:id" exact>
          <ItemListContainer />
        </Route>
        <Route path="/category/:id">
          <ItemListContainer  />
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
      </Switch>
    </BrowserRouter>
  );
};
export default App;
