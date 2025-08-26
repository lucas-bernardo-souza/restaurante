import {Button} from"../buttons/button"
import "./header.css"

export function Header(){
    return(
        <div className="header">
            <div className="headerLogo">
                <h1>Casa do Assado</h1>
                <p>Restaurante e Buffet</p>
            </div>
            <div className="headerMenu">
                <Button nome="Pedidos"/>
                <Button nome="Mesas"/>
                <Button nome="Caixa"/>
                <Button nome="Produtos"/>
                <Button nome="Garçons"/>
                <Button nome="Relatórios"/>
            </div>
        </div>
    );
}