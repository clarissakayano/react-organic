import './styles';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Container, ContainerMobile } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header  = () =>(
    <>
    <Container className="mb-3">
        <div className="container py-4 d-flex align-items-center">
            <div className="col-md-6 p-4 d-none d-md-block d-lg-block d-xl-block">
                <a className=" navbar-brand me-4" href="/">
                    <img src={logo} alt="Logo Organic" />
                </a>
            </div>
            <div className="d-flex col-md-6 row-col-none d-none d-md-block d-lg-block d-xl-block mt-3">
                <ul className="d-flex justify-content-between list-unstyled">
                    <li className="nav-item">
                        <Link className="nav-link text-color" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-color" to="/produtos">SHOP</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-color" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-color" to="/contato">CONTACT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-color" to="/checkout">CHECKOUT</Link>
                    </li>
                    <li className="nav-item text-color">
                    <Link to="/carrinho"><AiOutlineShoppingCart /></Link>
                    </li>
                </ul>
            </div>
        </div>
        <ContainerMobile className="container d-md-none">
            <div className="row">
                <div className="col-9 d-md-none">
                    <a className="navbar-brand me-4" href="/">
                    <img className="img-fluid" src={logo} alt="Logo Organic" />
                    </a>
                </div>
                <div className="col mt-2">
                    <button className="btn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" ><GiHamburgerMenu/>
                    </button>
                </div>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img src={logo} alt="Logo Organic" /></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className='list-unstyled'>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-mobile" to="/">Home</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-mobile" to="/produtos">Shop</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-mobile" to="/about">About</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-mobile" to="/contato">Contact</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-mobile" to="/checkout">Checkout</Link>
                        </li>
                        <li className="nav-item mt-2 text-mobile">
                            <Link to="/carrinho">Cart <AiOutlineShoppingCart /></Link>
                        </li>
                    </ul>
                </div>
                </div>
                <i className="fi fi-rr-menu-burger"></i>
            </div>
        </ContainerMobile>
    </Container>
    </>

);

export default Header;
