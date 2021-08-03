import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    

    return(
    <>
        <Header/>
        <ItemListContainer greeting="Bienvenidos a mi tienda On-Line"/>
        <ItemDetailContainer/>
    </>
    )
}
export default App