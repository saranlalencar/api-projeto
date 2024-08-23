import "./colecao.css"

import camiseta from "../../assets/icons/iconcamisa.png"
import fone from "../../assets/icons/fone.png"
import bone from "../../assets/icons/bone.png"
import jeans from "../../assets/icons/jeans.png"
import tenis from "../../assets/icons/tenis.png"

function Colecao (){
    return(
        <div className="container-colecao">
            <div className="colecao">
                <h1>Coleção em destaque</h1>
                <div className="itens-colecao">
                    <div className="itens">
                        <img src={camiseta} />
                        <p>Camisetas</p>
                    </div>
                    <div  className="itens">
                        <img src={jeans} />
                        <p>Camisetas</p>
                    </div>
                    <div  className="itens">
                        <img src={bone} />
                        <p>Camisetas</p>
                    </div>
                    <div  className="itens">
                        <img src={fone} />
                        <p>Camisetas</p>
                    </div>
                    <div  className="itens">
                        <img src={tenis} />
                        <p>Camisetas</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Colecao;