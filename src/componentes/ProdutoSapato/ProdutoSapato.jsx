import "./produtosapato.css"
import sapatosApi from "../../assets/sapatos/sapatos";

import { Link } from "react-router-dom";

import foto1 from "../../assets/sapatos/1.jpeg"
import foto2 from "../../assets/sapatos/2.jpeg"
import foto3 from "../../assets/sapatos/3.jpeg"
import foto4 from "../../assets/sapatos/4.jpeg"
import foto5 from "../../assets/sapatos/5.jpeg"
import foto6 from "../../assets/sapatos/6.jpeg"
import foto7 from "../../assets/sapatos/7.jpeg"
import foto8 from "../../assets/sapatos/8.jpeg"
import foto9 from "../../assets/sapatos/9.jpeg"
import foto10 from "../../assets/sapatos/10.jpeg"

const Foto01 = () => {
    return(
            <div>
                <Link to="/visualizar" ><img src={foto1} alt="tenis slake abc do amor" /></Link>
            </div>
          
    )
}

const Foto02 = () => {
    return(
            <div>
                <Link to="/visualizar" ><img src={foto2} alt="tenis slake abc do amor" /></Link>
            </div>
          
    )
}

const Foto03 = () => {
    return(
            <div>
                <Link to="/visualizar" ><img src={foto3} alt="tenis slake abc do amor" /></Link>
            </div>
          
    )
}

const Foto04 = () => {
    return(
            <div>
                <Link to="/visualizar" ><img src={foto4} alt="tenis slake abc do amor" /></Link>
            </div>
          
    )
}


export function ProdutoSapato (){
    return(
        <div className="produto">
             <Foto03 />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>

    )
}

export function ProdutoSapato1 (){
    return(
        <div className="produto">
             <Foto04 />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>

    )
}

export function ProdutoSapatoCD (){
    return(
        <div className="produto">
            <span className="desconto">30% off</span>
            <Foto01 />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>
    )
}

export function ProdutoSapatoCD1 (){
    return(
        <div className="produto">
            <span className="desconto">30% off</span>
            <Foto02 />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>
    )
}





