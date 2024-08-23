import "./ofertashome.css"
import imageCapa from "../../assets/sapatos/hometenis2.png"

import { Link } from "react-router-dom";


function OfertasHomeBaixo(){
    return(
        <div className="containerofertas baixo">
            <div className="box-right">
                <img src={imageCapa} />
            </div>
            <div className="box-left">
                <div className="texts-box-left">
                    <p className="p1-texts-box-left">As melhores ofertas aqui na Dev Store </p>
                    <div className="center-box-left">
                        <h1  className="h1-ofertas">Modelo de colecionador</h1>
                        <p>Oferta por tempo limitado</p>
                    </div>
                    <p className="p2-texts-box-left">Toma lá, Toma cá, de todos os lados uma oferta especial para você!</p>
                    <Link to="/visualizar" > <button>Conferir Agora</button></Link>
                </div>
            </div>
        </div>
    )
}

export default OfertasHomeBaixo;