const Botao = (props) => {
    const button = {
        width: "10rem",
        margin: "1rem",
        padding: "0.5rem",
        fontSize: "5rem",
    }
    return(
        <div>
            <button onClick={props.funcao} style={button}>{props.texto}</button>
        </div>
    )
}

export default Botao