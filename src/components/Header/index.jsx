import './styles';
import {Link} from "react-router-dom";
import {BannerContainer, ContainerMobile} from './styles';
import logo from '../../assets/logo.png';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import { Name } from '../HeaderComp/styles';

const Header  = () =>(

    <>

        <BannerContainer className='flex-grow-1'>
            <header>
                <div className="container py-4 d-flex justify-content-3 align-items-center">
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
                                <Link className="nav-link  text-color" to="/shop">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-color" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-color" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item  text-color">
                            <Link to="/cart" className=""><AiOutlineShoppingCart /></Link>
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
                        <div className="col mt-2 text-end">
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
                           <div>
                                <input type="text" className="form-control color mb-2" placeholder="Need some fresh vegatables?" aria-label="text"/>
                            </div>
                             <Name>Organic Shop</Name>
                            <ul className='list-unstyled'>
                                <hr/>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">HOME</Link>
                                </li>
                                <hr/>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">SHOP</Link>
                                </li>
                                <hr/>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT</Link>
                                </li>
                                <hr/>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">CONTACT</Link>
                                </li>
                                <hr/>
                                <Link to="/cart" className="nav-link">CART <AiOutlineShoppingCart className="mx-4" /></Link>
                            </ul>
                        </div>
                        </div>
                        <i className="fi fi-rr-menu-burger"></i>
                    </div>
                </ContainerMobile>
            </header>
        </BannerContainer>
    </>

);

export default Header;