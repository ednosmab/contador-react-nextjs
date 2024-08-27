import { useState } from "react"
import DisplayContador from "./DisplayContador"
import Botao from "./Botao"

const Contador = () => {
    const [numero, setNumero] = useState(0)

    
    const incContador = ()=>{
        setNumero(numero +1) 
    }

    const decContador = ()=>{
        setNumero(numero -1) 
    }
    
    const estilo = {
        display: "flex",
        flexDirection: "row",
    }
    return(
        <>
            <h1>Contador</h1>
            <DisplayContador numero = {numero}/>
            <div style={estilo}>
                <Botao funcao={incContador} texto="+"/>
                <Botao funcao={decContador} texto="-"/>
            </div>
        </>
    ) 
}

export default Contador