import logo from '../../assets/logo.png';
import cred1 from '../../assets/card1.png';
import cred2 from '../../assets/card2.png';
import cred3 from '../../assets/card3.png';
import cred4 from '../../assets/card4.png';
import {FooterContainer, Button, FooterEnd, Title, InputColor, BorderInput, Style, Inp} from './styles';
import {HiOutlineMail} from "react-icons/hi";
import {BiMap} from "react-icons/bi";
import {FiPhone} from "react-icons/fi";
import { Link } from 'react-router-dom';





const Footer = () => (
<>
    <FooterContainer className="pt-3">
        <div className="container mb-3">
            <div className="row">
                <div className="d-lg-flex justify-content-lg-evenly justify-content-center  mt-5 mb-5 ">
                    <div className="">
                        <a className="navbar-brand" href="/">
                            <img className="mb-3 img-fluid" src={logo} alt="Logo Organic" />
                        </a>
                        <div className='d-flex'>
                            <ul>
                                <li className="mb-3">
                                <BiMap className="me-3"/> 379 5th Ave New York, NYC 10018
                                </li>
                                <li className="mb-3">
                                <FiPhone  className="me-3"/> (+1) 96 716 6879
                                </li>
                                <li>
                                <HiOutlineMail  className="me-3"/> contact@site.com
                                </li>
                            </ul>

                        </div>
                    </div>
                    

                    
                    <hr/>
                    <div className="col d-flex flex-column flex-lg-row col-12 col-lg-5 justify-content-between me-4">
                        
                        <div>
                            <p><Title className="mb-4">SHOP</Title></p>
                            <div className="d-flex flex-lg-column list px-0  grey">
                                <Style>Food</Style>
                                <Style>Farm</Style>
                                <Style>Health</Style>
                                <Style>Organic</Style>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <Title className="mb-4">SUPPORT</Title>
                            <div className="d-flex d-lg-block">
                                <Style>Contact Us</Style>
                                <Style>FAQ</Style>
                                <Style>Privacy Policy</Style>
                                <Style>Blog</Style>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <Title className="mb-4">MY ACCOUNT</Title>
                            <div className="d-flex d-lg-block">
                            <Style>Sign In</Style>
                            <Style>My Cart</Style>
                            <Style>My Wishlist</Style>
                            <Style>Check Out</Style>
                        </div>
                    </div>
                    </div>
                    <hr/>
                    <form>
                        <div>
                            <Title>NEWSLETTER</Title>
                            <Style>Subscribe now to get daily updates</Style>
                            <div className=" py-1">
                            <div id="btn">
                            <div className="flex-grow-1 ">
                            <Inp>
                            <input
                            type="email"className="border-0 mx-3 py-2 w-100" placeholder="Your Email.." />
                            <Button type="submit" className="btn"><HiOutlineMail size={25} c/></Button>
                            </Inp>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <FooterEnd>
        <div className="container">
        <div container="row">
        <div className="d-flex copy-right text-center">
            <div>
                <a href="https://www.linkedin.com/in/clarissa-a-kayano-37a011259/" target='blank'>
                <span className="text-align-center" id="color" >Site by Clarissa Kayano</span>
                </a>
            </div>
            <div className="d-flex mb-2">
                <div className=" px-2">
                    <img src={cred1} />
                </div>
                <div className="px-2">
                    <img src={cred2} />
                </div>
                <div className="px-2">
                    <img src={cred3} />
                </div>
                <div className="px-2">
                    <img src={cred4} />
                </div>
            </div>
        </div>
        </div>
        </div>
        </FooterEnd>
    </FooterContainer>

</>

);
export default Footer;