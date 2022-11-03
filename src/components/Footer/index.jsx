import logo from '../../assets/logo.png';
import {FooterContainer, List, Button} from './styles';
import {HiOutlineMail} from "react-icons/hi";
import {BiMap} from "react-icons/bi";
import {FiPhone} from "react-icons/fi";





const Footer = () => (
<>
    <FooterContainer className="pb-4">
        <div className="container mt-4">
            <a class="navbar-brand" href="/">
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

    </FooterContainer>
</>

);
export default Footer;