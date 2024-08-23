import imageCapa from "../../assets/sapatos/hometenis.png"

import { register } from "swiper/element/bundle"
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import {Swiper, SwiperSlide } from 'swiper/react'
register();

import foto22 from "../../assets/sapatos/22.jpeg"
import foto23 from "../../assets/sapatos/23.jpeg"
import foto24 from "../../assets/sapatos/24.jpeg"

import { Link } from "react-router-dom";

import "./ofertashome.css"

function OfertasHome(){
    return(
        <div className="containerofertas">
            {/* <div className="box-left">
                <div className="texts-box-left">
                    <p className="p1-texts-box-left">As melhores ofertas aqui na Dev Store </p>
                    <div className="center-box-left">
                        <h1 className="h1-ofertas">O Tênis dos sonhos chegou</h1>
                        <p>Oferta por tempo limitado</p>
                    </div>
                    <p className="p2-texts-box-left">Toma lá, Toma cá, de todos os lados uma oferta especial para você!</p>
                    <button>Conferir Agora</button>
                </div>
            </div>
            <div className="box-right">
                <img src={imageCapa} />
            </div> */}

            <Swiper
                    className="containerofertas"
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    // navigation={{ clickable: true }}
                    >
                    <SwiperSlide>
                        <div  className="slides">
                            <div className="box-left">
                                <div className="texts-box-left">
                                    <p className="p1-texts-box-left">As melhores ofertas aqui na Dev Store </p>
                                    <div className="center-box-left">
                                        <h1 className="h1-ofertas">O Tênis dos sonhos chegou</h1>
                                        <p>Oferta por tempo limitado</p>
                                    </div>
                                    <p className="p2-texts-box-left">Toma lá, Toma cá, de todos os lados uma oferta especial para você!</p>
                                    <Link to="/visualizar" > <button>Conferir Agora</button></Link>
                                </div>
                            </div>
                            <div className="box-right">
                                <img src={imageCapa} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className="slides">
                            <div className="box-left">
                                <div className="texts-box-left">
                                    <p className="p1-texts-box-left">As melhores ofertas aqui na Dev Store </p>
                                    <div className="center-box-left">
                                        <h1 className="h1-ofertas">O Queridinho delas</h1>
                                        <p>Oferta por tempo limitado</p>
                                    </div>
                                    <p className="p2-texts-box-left">Oferta especial para você elas!</p>
                                    <Link to="/visualizar" > <button>Conferir Agora</button></Link>
                                </div>
                            </div>
                            <div className="box-right">
                                <img src={foto23} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className="slides">
                            <div className="box-left">
                                <div className="texts-box-left">
                                    <p className="p1-texts-box-left">As melhores ofertas aqui na Dev Store </p>
                                    <div className="center-box-left">
                                        <h1 className="h1-ofertas">O sonho está ao seu alcance</h1>
                                        <p>Oferta por tempo limitado</p>
                                    </div>
                                    <p className="p2-texts-box-left">O conforto que os seus pés merece está logo aqui!</p>
                                    <Link to="/visualizar" > <button>Conferir Agora</button></Link>
                                </div>
                            </div>
                            <div className="box-right">
                                <img src={foto24} />
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default OfertasHome;