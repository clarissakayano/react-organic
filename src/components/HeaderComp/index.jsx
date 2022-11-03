import './styles';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import {AiOutlineShoppingCart} from "react-icons/ai";

const Header  = () =>(
    <>
            <header>
                <div className="container py-4 d-flex justify-content-3 align-items-center">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo Organic" />
                    </a>
                    <div className="container">
                        <ul className="d-flex justify-content-between list-unstyled">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/produtos">SHOP</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/contato">CONTACT</Link>
                            </li>
                            <Link to="/carrinho" className="px-4 mx-4"><AiOutlineShoppingCart /></Link>
                        </ul>
                    </div>

                </div>
            </header>
    </>

);

export default Header;
