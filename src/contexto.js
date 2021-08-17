import {createContext} from "react";

//Creo un contexto con valor o sin valor por default{nombre: "Horacio"}
const contexto = createContext()

export const {Consumer, Provider} = contexto
//Provider : Si bien podes usar el contexto en cualquier componente, el Provider en el medio te permite cambiarle el valor
//Consumer : Consume el valor del contexto PERO usando JSX
//useContext : Consume el valor del contexto

export default contexto