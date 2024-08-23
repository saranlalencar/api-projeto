import DestaqueHome from "../../componentes/DestaqueHome/DestaqueHome"
import Header from "../../componentes/Header/Header"
import OfertasHome from "../../componentes/OfertasHome/OfertasHome"
import OfertasHomeBaixo from "../../componentes/OfertasHome/OfertasHomeBaixo"
import Footer from "../../componentes/Footer/Footer"
import Colecao from "../../componentes/Colecao/Colecao"
import ColecaoDestaque from "../../componentes/ColecaoDestaque/ColecaoDestaque"

import "./home.css"

function Home() {
  return (
    <div className="home" >
      <Header />
      <OfertasHome />
      <ColecaoDestaque />
      <Colecao />
      <DestaqueHome />
      <OfertasHomeBaixo />
      <Footer />
    </div>
  )
}

export default Home;