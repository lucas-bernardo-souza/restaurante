
export function Pedido(props){
    return(
        <div className="pedido">
            <div className="titulo">
                <div className="descricao">
                    <p>Pedido de N°:</p>
                    <h2>Mesa {props.mesa}</h2>
                </div>
                <div className="numero">
                    <h1>{props.numero}</h1>
                </div>                
            </div>
            <hr></hr>
            <div className="produtos">
                {
                    props.produtos.map((item, index)=>(
                        <li key={index}>{item.qtd} {item.descricao}</li>
                    ))
                }
            </div>
        </div>
    )
}