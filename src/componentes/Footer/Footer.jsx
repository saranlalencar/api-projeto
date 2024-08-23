import { FaNodeJs } from "react-icons/fa";
import "./footer.css"

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";



function Footer(){
    return(
            <div className="container-footer">
                <div className="footer">
                    <div className="box-texts">
                        <div className="box-text-left">
                            <h1><FaNodeJs className='icon-footer-js'/>Digital Store</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur possimus officiis </p>
                            <span>
                                <a href=""><FaFacebookF className="icons-fa-footer" /></a>
                                <a href=""><FaInstagram className="icons-fa-footer" /></a>
                                <a href=""><FaTwitter className="icons-fa-footer" /></a>
                            </span>
                        </div>
                        <div className="box-text-center">
                            <div className="collums-box-center">
                                <h4>Informação</h4>
                                <a href="">Sobre dev store</a>
                                <a href="">Segurança</a>
                                <a href="">Wishilist</a>
                                <a href="">Blog</a>
                                <a href="">Trabalhe conosco</a>
                                <a href="">Meus Pedidos</a>
                            </div>
                            <div className="collums-box-center">
                                <h4>Categorias</h4>
                                <a href="">Tênis</a>
                                <a href="">Calças</a>
                                <a href="">Bonés</a>
                                <a href="">Headphones</a>
                                <a href="">Camisetas</a>
                                <a href="">Acessórios</a>
                            </div>
                        </div>
                        <div className="box-text-right">
                            <h4>Contato</h4>
                            <p>Av. abcdefgh, 777, torre-2, andar-1, Jurubeba, Fortaleza-Ce, 60555-123  </p>
                            <p>(85) 9 9090.9220</p>
                        </div>
                    </div>
                    <hr className="linha" />
                    <p>@ Digital College | Todos os direitos reservados</p>
                </div>
            </div>
    )
}

export default Footer;