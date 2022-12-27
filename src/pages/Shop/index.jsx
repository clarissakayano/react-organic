import {Link} from "react-router-dom";
import {BannerShop, TitleShop, ShopContainer} from './styles';
import Footer from "../../components/Footer";
import HeaderComp from "../../components/HeaderComp";
import CardShop from "../../components/CardShop";
import lettuce from "../../assets/lettuce.jpg";
import onion from "../../assets/onion.jpg";
import bean from "../../assets/bean.jpg";
import lemon from "../../assets/lemon.jpg";
import spinach from "../../assets/spinach.jpg";
import apple from "../../assets/apple.jpg";
import broccoli from "../../assets/broccoli.jpg";
import brasil from "../../assets/brasil.jpg";
import pear from "../../assets/pear.jpg";
import tomato from "../../assets/tomate.jpg";
import bitter from "../../assets/bitter_melon.jpg";
import cucumber from "../../assets/cucumber.jpg";



const ShopCart =() => (
    <>
        <HeaderComp />
        <ShopContainer>
            <BannerShop  className=' flex-grow-1'>
                <div className="container d-flex justify-content-center">
                    <div className="row mt-5">
                        <div className="col d-flex py-5">
                            <TitleShop role="button">Shop</TitleShop>
                        </div>
                    </div>
                </div>
            </BannerShop>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center mt-5 g-4 mb-5 text-center">
                    <div className="col d-flex">
                        <CardShop
                        title="Salad"
                        image={lettuce} alt="lettuce"
                        price={3.20}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop title="Onion"
                        image={onion} alt="onion"
                        price={3.20}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop
                        title="Bean"
                        image={bean} alt="bean"
                        price={3.50}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop title="Lemon"
                        image={lemon} alt="lemon"
                        price={1.80}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop
                        title="Spinach"
                        image={spinach} alt="spinach"
                        price={2.26}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop title="Apple"
                        image={apple} alt="apple"
                        price={4.05}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop
                        title="Boccoli"
                        image={broccoli} alt="broccoli"
                        price={3.88}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop title="Brasil"
                        image={brasil} alt="brasil"
                        price={1.55}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop
                        title="Pear"
                        image={pear} alt="pear"
                        price={4.20}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop title="Tomato"
                        image={tomato}alt="tomato"
                        price={2.32}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop
                        title="Bitter Melon"
                        image={bitter} alt="bitter"
                        price={5.20}
                        />
                    </div>
                    <div className="col d-flex">
                        <CardShop title="Cucumber"
                        image={cucumber} alt="cucumber"
                        price={3.45}
                        />
                    </div>
                </div>
            </div>
        </ShopContainer>
        <Footer />
    </>
);

export default ShopCart;