import logo from '../../assets/logo.png';
import cred1 from '../../assets/card1.png';
import cred2 from '../../assets/card2.png';
import cred3 from '../../assets/card3.png';
import cred4 from '../../assets/card4.png';
import {FooterContainer, Button, FooterEnd, Title, InputColor, BorderInput} from './styles';
import {HiOutlineMail} from "react-icons/hi";
import {BiMap} from "react-icons/bi";
import {FiPhone} from "react-icons/fi";





const Footer = () => (
<>
    <FooterContainer className="pt-3">
        <div className="container mb-3">
            <div className="d-lg-flex justify-content-evenly mt-5 mb-5 ">
                <div className="">
                    <a className="navbar-brand" href="/">
                        <img className="mb-3 img-fluid" src={logo} alt="Logo Organic" />
                    </a>
                    <div className='d-flex'>
                        <ul>
                            <li className="mb-2">
                            <BiMap className="mr-4"/> 379 5th Ave New York, NYC 10018
                            </li>
                            <li className="mb-2">
                            <FiPhone/> (+1) 96 716 6879
                            </li>
                            <li>
                            <HiOutlineMail /> contact@site.com
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row">

                </div>
                <hr/>
                <div>
                    <p><Title className="mb-4">SHOP</Title></p>
                    <div className="d-flex justify-content-between d-lg-block">
                        <p>Food</p>
                        <p>Farm</p>
                        <p>Health</p>
                        <p>Organic</p>
                    </div>
                </div>
                    <hr />
                    <div>
                        <Title className="mb-4">SUPPORT</Title>
                        <div className="d-flex justify-content-between d-lg-block">
                            <p>Contact Us</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <Title className="mb-4">MY ACCOUNT</Title>
                        <div className="d-flex justify-content-between d-lg-block">
                        <p>Sign In</p>
                        <p>My Cart</p>
                        <p>My Wishlist</p>
                        <p>Check Out</p>
                    </div>
                </div>
                <hr/>
                <form>
                    <div>
                        <Title>NEWSLETTER</Title>
                        <p>Subscribe now to get daily updates</p>
                    <BorderInput id="bg-button" className="col-auto form-group border-0 d-flex left-inner-addon">
                        
                        
                        <InputColor type="email" className="" placeholder="Your Email.."/>
                        <Button type="submit" className="btn btn-primary"><HiOutlineMail/></Button>
                   
                    </BorderInput>

                    <div className=" py-1">
                        
                        <InputColor type="email" className="ms-3 px-3" placeholder="Your Email.."/>
                        <Button type="submit" className="btn btn-primary px-2"><HiOutlineMail/></Button>
                    </div>
                    </div>
                </form>
            </div>
            </div>
        <FooterEnd>
            
        <div className="container">
        <div container="row">
        <div className="d-flex copy-right text-center">
            <div>
                <span className="text-align-center">Copyright © 2017 Designed by AuThemes. All rights reserved.</span>
            </div>
            <div className="d-flex">
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