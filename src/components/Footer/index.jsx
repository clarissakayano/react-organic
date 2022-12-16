import logo from '../../assets/logo.png';
import cred1 from '../../assets/card1.png';
import cred2 from '../../assets/card2.png';
import cred3 from '../../assets/card3.png';
import cred4 from '../../assets/card4.png';
import {FooterContainer, Button, FooterEnd, Title} from './styles';
import {HiOutlineMail} from "react-icons/hi";
import {BiMap} from "react-icons/bi";
import {FiPhone} from "react-icons/fi";





const Footer = () => (
<>
    <FooterContainer >
        <div className="container mb-3">
            <div className="row flex-row row-cols-sm-2 row-cols-md-5 row-cols-lg-6 pt-5 ">
                <div className="">
                <a className="navbar-brand" href="/">
                    <img className="mb-3" src={logo} alt="Logo Organic" />
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
                <div className='col' >
                    <Title>SHOP</Title>
                    <li>Food</li>
                    <li>Farm</li>
                    <li>Health</li>
                    <li>Oragnic</li>
                </div>
                <div className='col'>
                    <Title>SUPPORT</Title>
                    <li>Contact US</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Blog</li>
                </div>
                <div className='col'>
                    <Title>MY ACCOUNT</Title>
                    <li>Sign In</li>
                    <li>My Cart</li>
                    <li>My Wishlist</li>
                    <li>Check Out</li>
                </div>
                <div>
                    <Title>NEWSLETTER</Title>
                    <p>Subscribe now to get daily updates</p>
                    <form>
                    <div id="bg-button" className="col-auto border d-flex">
                        <label for="inputPassword2" className="visually-hidden"></label>
                        <input type="password" className="form-control border-0" id="inputPassword2"  placeholder="Your Email.." />
                        <Button type="submit" className="btn btn-primary"><HiOutlineMail/></Button>
                    </div>
                    <div className="col-auto">
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