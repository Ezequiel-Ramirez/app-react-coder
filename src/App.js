import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {


    return (

        <BrowserRouter>
            <Header />
<Switch>
            
            <Route path="/category/:id">
                <ItemListContainer greeting="Productos - Masculino" />
            </Route>
            <Route path="/category/:id">
                <ItemListContainer greeting="Productos - Femenino" />
            </Route>
            <Route path="/category/:id" >
                <ItemListContainer greeting="Productos - Infantil" />
            </Route>
            <Route path="/" exact>
                <ItemListContainer greeting="Bienvenidos a mi tienda On-Line" />
            </Route>
</Switch>
            <ItemDetailContainer />

        </BrowserRouter>

    )
}
export default App