import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route } from "react-router-dom";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    

    return(
    <>
    <BrowserRouter>
        <Header/>
        <ItemListContainer greeting="Bienvenidos a mi tienda On-Line"/>
        <ItemDetailContainer/>
    </BrowserRouter>
    </>
    )
}
export default App