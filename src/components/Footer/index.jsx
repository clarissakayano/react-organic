import logo from '../../assets/logo.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';
import {FooterContainer, Button, FooterEnd} from './styles';
import {HiOutlineMail} from "react-icons/hi";
import {BiMap} from "react-icons/bi";
import {FiPhone} from "react-icons/fi";





const Footer = () => (
<>
    <FooterContainer >
        <div className="container mt-4">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo Organic" />
            </a>
        </div>
        <div className="container">
            <div className="row flex-row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 pt-5 ">
                <div className='col'>
                    <div>
                    <BiMap/> 379 5th Ave New York, NYC 10018
                    </div>
                    <div>
                    <FiPhone/> (+1) 96 716 6879
                    </div>
                    <div>
                    <HiOutlineMail/> contact@site.com
                    </div>
                </div>
                <div className='col'>
                    <h4>SHOP</h4>
                    <li>Food</li>
                    <li>Farm</li>
                    <li>Health</li>
                    <li>Oragnic</li>
                </div>
                <div className='col'>
                    <h4>SUPPORT</h4>
                    <li>Contact US</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Blog</li>
                </div>
                <div className='col'>
                    <h4>MY ACCOUNT</h4>
                    <li>Sign In</li>
                    <li>My Cart</li>
                    <li>My Wishlist</li>
                    <li>Check Out</li>
                </div>
                <div className='col'>
                    <h4>NEWSLETTER</h4>
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
        <div className="d-flex copy-right-inner">
            <div className="text-center">
                <p className="text-align-center">Copyright © 2017 Designed by AuThemes. All rights reserved.</p>
            </div>
           <div >
            <ul>
                <li className=" px-2">
                    <img src={card1} />
                </li>
                <li className="px-2">
                    <img src={card2} />
                </li>
                <li className="px-2">
                    <img src={card3} />
                </li>
                <li className="px-2">
                    <img src={card4} />
                </li>
            </ul>
           </div>

        </div>
        </div>
        </div>
        </FooterEnd>
    </FooterContainer>

</>

);
export default Footer;