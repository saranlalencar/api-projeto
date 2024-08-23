import "./destaquehome.css"
import { FaLongArrowAltRight } from "react-icons/fa";

import foto1 from "../../assets/sapatos/1.jpeg"
import foto2 from "../../assets/sapatos/2.jpeg"
import foto3 from "../../assets/sapatos/3.jpeg"
import foto4 from "../../assets/sapatos/4.jpeg"
import foto5 from "../../assets/sapatos/5.jpeg"
import foto6 from "../../assets/sapatos/6.jpeg"
import foto7 from "../../assets/sapatos/7.jpeg"
import foto8 from "../../assets/sapatos/8.jpeg"

import {ProdutoSapato, ProdutoSapato1, ProdutoSapatoCD, ProdutoSapatoCD1 } from "../ProdutoSapato/ProdutoSapato";

import { Link } from "react-router-dom";

function DestaqueHome() {

  return (
    <div className="Produtos-em-destque-home" >
      <div className="em-alta-ver-todos">
        <h4>Produtos em alta</h4>
        <span>
          <Link to="/produtos">Ver todos <FaLongArrowAltRight /></Link>
        </span>

      </div>
      <div className="container" >
        <ProdutoSapatoCD />
        <ProdutoSapatoCD1 />
        <div class="break"></div>
        <ProdutoSapato />
        <ProdutoSapato1 />
      </div>
      <div className="container" >
        <div className="produto">
            <img src={foto5} alt="tenis slake abc do amor" />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>
          <div className="produto">
            <img src={foto6} alt="tenis slake abc do amor" />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>
          <div class="break"></div>
          <div className="produto">
            <img src={foto7} alt="tenis slake abc do amor" />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>
          <div className="produto">
            <img src={foto8} alt="tenis slake abc do amor" />
            <p>Tênis</p>
            <h3>Tenis abc do amor slake - Feminino</h3>
            <h4>De <s>R$ 450,00</s> Por  R$199,90</h4>
          </div>
      </div>
    </div>
  )
}

export default DestaqueHome;