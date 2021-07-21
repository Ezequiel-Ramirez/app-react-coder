//tener react en scope
import React from "react"
//tener REACT_DOM en scope
import ReactDom from "react-dom"

import App from "./App"
//crear un componente
//const App = () => "Hola Mundo"
//renderizar la aplicacion
ReactDom.render(<App/>, document.getElementById("root"))