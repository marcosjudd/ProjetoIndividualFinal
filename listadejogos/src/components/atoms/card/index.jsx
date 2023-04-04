import "./style.css"

function Card(props){
    
    
    return(
        <div className="card" onClick={props.onclickCard}>
            <div className="imagem">
                <img src={props.cartaz}></img>
            </div>
            <div className="titulo">
                <h2>{props.titulo}</h2>
            </div>
            <p>{props.texto}</p>
            <div className="delete" onClick={props.onclick}>
                <h3>X</h3>
            </div>
        </div>
    )
}

export default Card