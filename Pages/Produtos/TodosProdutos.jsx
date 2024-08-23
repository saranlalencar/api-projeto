import Filtro from "../../componentes/Filtro/Filtro"
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

import { ProdutoSapatoCD,ProdutoSapatoCD1,ProdutoSapato,ProdutoSapato1 } from "../../componentes/ProdutoSapato/ProdutoSapato";


import "./todosprodutos.css"

function TodosProdutos(){
    
    return(
        <div className="container-todos-produtos home">
            <Header />
            <div className="todos-produtos">
                <Filtro />
                <div className="lista-produtos-todos-produtos">
                    <div className="container" >
                        <ProdutoSapatoCD />
                        <ProdutoSapatoCD1 />
                        <div class="break"></div>
                        <ProdutoSapato />
                        <ProdutoSapato1 />
                    </div>
                    <div className="container" >
                        <ProdutoSapatoCD />
                        <ProdutoSapatoCD1 />
                        <div class="break"></div>
                        <ProdutoSapato />
                        <ProdutoSapato1 />
                    </div>
                    <div className="container" >
                        <ProdutoSapatoCD />
                        <ProdutoSapatoCD1 />
                        <div class="break"></div>
                        <ProdutoSapato />
                        <ProdutoSapato1 />
                    </div>
                    <div className="container" >
                        <ProdutoSapatoCD />
                        <ProdutoSapatoCD1 />
                        <div class="break"></div>
                        <ProdutoSapato />
                        <ProdutoSapato1 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TodosProdutos;