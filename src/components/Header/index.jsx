import './styles';
import {Link} from "react-router-dom";
import {BannerContainer} from './styles';
import logo from '../../assets/logo.png';
import {AiOutlineShoppingCart} from "react-icons/ai";

const Header  = () =>(

    <>

        <BannerContainer className=' flex-grow-1 '>
            <header>
                <div className="container py-4 d-flex justify-content-3 align-items-center">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="Logo Organic" />
                    </a>
                    <div className="container">
                        <ul className="d-flex justify-content-between list-unstyled">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/produtos">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/carrinho" className="px-4 mx-4"><AiOutlineShoppingCart /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </BannerContainer>
    </>

);

export default Header;