import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => 
    <>
        <Header/>
        <ItemListContainer greeting="Bienvenidos a mi tienda On-Line"/>
    </>
export default App