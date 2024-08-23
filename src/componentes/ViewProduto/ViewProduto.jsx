import { register } from "swiper/element/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
register();

import foto22 from "../../assets/sapatos/22.jpeg";
import foto23 from "../../assets/sapatos/23.jpeg";
import foto24 from "../../assets/sapatos/24.jpeg";

import React, { useState } from 'react';

import "./viewproduto.css";

function ViewProduto() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState('');

    const sizes = [39, 40, 41, 42, 43];
    const colors = ['#82e4fa', '#FD8989', '#4c4b4b', '#6265d3'];

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="container-view-produto">
            <div className="view-produto">
                <div className="item-Produto">
                    <Swiper
                        className="swiper-viw"
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={{ clickable: true }}
                    >
                        <SwiperSlide className="slide-viw">
                            <img src={foto22} alt="Shoe 22" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-viw">
                            <img src={foto23} alt="Shoe 23" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-viw">
                            <img src={foto24} alt="Shoe 24" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="texts-produtos">
                    <div className="header-produto-viw">
                        <h1>Slake ayes undecut Flow DEGRTE 3</h1>
                        <p>
                            <span>Casual</span>|
                            <span>Nike</span>|
                            <span>REF : 00732115</span>
                        </p>
                    </div>
                    <div className="avaliações">
                        4.5 de 5 | 28 avaliações
                    </div>
                    <div className="preço-descrição">
                        <p>R$ <span>219,90</span> <s>490,00</s></p>
                        <h4>Descrição do produto</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse minus aperiam, voluptates accusantium facilis natus, aliquid maxime neque laborum, illum voluptatum quaerat. Consequatur, doloribus eligendi! Impedit illum veniam cupiditate!</p>
                    </div>
                    <div className="box-tamanho">
                        <p>Tamanho</p>
                        <div className="tamanhos">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeClick(size)}
                                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="box-cor">
                        <p>Cor</p>
                        <div className="cores">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => handleColorClick(color)}
                                    className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <button className="btn-compra">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProduto;
