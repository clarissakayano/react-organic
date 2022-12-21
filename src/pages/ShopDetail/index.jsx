import {Link} from "react-router-dom";
import {BannerShop, TitleShop, ShopContainer, Title, ButtonCart, ButtonSub, ButtonAdd, Buttonlove} from './styles';
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
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";



const ShopDetail =() => {
    const [count, setCount] =useState('0');
    return(
    <>
        <HeaderComp />
        <ShopContainer>
            <BannerShop  className=' flex-grow-1'>
                <div className="container d-flex justify-content-center">
                    <div className="row mt-5">
                        <div className="col d-flex py-5">
                            <TitleShop role="button">Shop Detail</TitleShop>
                        </div>
                    </div>
                </div>
            </BannerShop>
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <img src={lettuce} alt="salad" />
                    </div>
                
                    <div className="col">
                    <h2 className="product mb-3" >Salad</h2>
                    <p className="price">$2.00</p>
                    <hr/>
                    <p>
                    Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut pharetra ut,
                    interdum at mauris. Aenean efficitur aliquet libero sit amet scelerisque.
                     Suspendisse efficitur mollis eleifend. Aliquam tortor nibh, venenatis quis
                     sem dapibus, varius egestas lorem a sollicitudin.
                    </p>
                    <div className="d-flex">

                        
                        <ButtonSub type="button" onClick={() => setCount(count-1)}>
                            -
                        </ButtonSub>
                        <div></div>
                        <span className="border">{count}</span>
                        <ButtonAdd type="button" onClick={() => setCount(count + 1)}>
                            +
                        </ButtonAdd>

                        


                        <div className="d-flex justify-content-evenly px-2">
                            <div className="mx-5 me-5">
                                 <ButtonCart >APPLY COUPON</ButtonCart>
                            </div>
                           
                            <div className="">
                            
                                <Buttonlove ><AiTwotoneHeart /></Buttonlove >
                            </div>

                       </div>
                    </div>

                    
                        
                 

                    </div>
                </div>
               



                <Title className="d-flex justify-content-center">Related Products</Title>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center mt-5 g-5 mb-5 text-center">
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

                </div>
            </div>
        </ShopContainer>
        <Footer />
    </>
)
    };

export default ShopDetail;