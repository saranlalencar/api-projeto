import ViewProduto from "../../componentes/ViewProduto/ViewProduto";
import Header from "../../componentes/Header/Header";
import DestaqueHome from "../../componentes/DestaqueHome/DestaqueHome";
import Footer from "../../componentes/Footer/Footer";

import "../Home/home.css"

function Produtos (){

    return(
        <div className="home">
            <Header />
            <ViewProduto />
            <DestaqueHome />
            <Footer />
        </div>

    )
}

export default Produtos;