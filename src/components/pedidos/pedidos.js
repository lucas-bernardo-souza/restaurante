import {Pedido} from '../pedido/pedido'

const pedido = {
    numero: 1,
    mesa: 3,
    produtos: [item = {descricao: "Refrigerante lata", qtd: 3}, item = {descricao: "Espeto de carne", qtd: 1}, item = {descricao: "Medalhão de frango", qtd: 2}]
}

const pedido2 = {
    numero: 2,
    mesa: 9,
    produtos: [item = {descricao: "Coca-cola lata", qtd: 2}, item = {descricao: "Brahma lata", qtd: 5}, item = {descricao: "Espeto de carne", qtd: 4}]
}

let pedidos = [pedido, pedido2];

export function Pedidos(){
    <div className='pedidos'>
        {pedidos.map((pedido)=>(
            <Pedido numero = {pedido.numero} mesa = {pedido.mesa} produtos = {pedido.produtos}/>
        ))}
    </div>
}