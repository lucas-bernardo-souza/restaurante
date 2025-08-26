import{Header} from "../components/header/header"
import{Inicial} from "../components/inicial/inicial"
import "./home.css"

export function Home(){
    return(
        <div className="home">
            <Header/>
            <Inicial/>
        </div>
        
    )
}