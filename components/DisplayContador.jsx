const DisplayContador = (props) => {

    const estilo = {
        width: "100px",
        height: "100px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        backgroundColor: "#e4e9f0",
        color: "#10424e",
        fontSize: "5rem",
        fontFamily: 'Sans Serif'

    }

    return(
        <div style={estilo}>
            {props.numero}
        </div>
    )
}

export default DisplayContador