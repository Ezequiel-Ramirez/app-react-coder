import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    

    return(
    <>
        <Header/>
        <ItemListContainer greeting="Bienvenidos a mi tienda On-Line"/>
    </>
    )
}
export default App