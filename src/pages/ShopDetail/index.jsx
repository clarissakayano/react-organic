import {Link} from "react-router-dom";
import {BannerShop, TitleShop, ShopContainer, Title, ButtonCart, ButtonSub, ButtonAdd, Buttonlove, Categ, Color} from './styles';
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
import { useEffect, useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import {ImFacebook, ImGooglePlus, ImPinterest, ImTwitter} from "react-icons/im"
import { RiInstagramLine } from "react-icons/ri";
import useTitle from "../../hooks/useTitle";
import { useCallback } from "react";



const ShopDetail =() => {
    const [count, setCount] =useState(0);
   
    const setTitle = useTitle();

    useEffect(() => {
      setTitle('Salad');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });

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
                <div className="row row-cols-lg-2 row-cols-1 mt-4">
                    <div className="col">
                        <div className="d-flex justify-content-md-center justify-content-lg-between">
                            <img className="img-fluid" src={lettuce} alt="salad" />
                        </div>
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
                        <div className="d-flex flex-wrap">
                            <div className="d-flex mt-2">
                            <ButtonSub type="button" onClick= {() => {
                                 if (count > 0) {
                            setCount(count-1);
                        }}}>
                                -
                            </ButtonSub>
                            <span className="border">{count}
                            </span>
                            <ButtonAdd type="button" onClick={() => setCount(count + 1)}>
                                +
                            </ButtonAdd>
                            </div>
                            <div className="d-flex justify-content-evenly mt-2 me-2">
                                <ButtonCart >ADD TO CART</ButtonCart>
                            </div>
                            <div className="mt-2">
                                <Buttonlove ><AiTwotoneHeart /></Buttonlove >
                            </div>
                        </div>
                    </div>
                </div>
                        <hr/>
                        <div>
                            <div >
                                <Categ >Categories:</Categ><Color>Food</Color>
                            </div>
                            <div>
                                <Categ>Tags:</Categ><Color>Natural, Organic, Health, Green, Vegetable</Color>
                            </div>
                            <div>
                                <Categ>ID:</Categ><Color>A203</Color>
                            </div>

                            <div className="d-flex mt-4">
                                <div>
                                <a href="https://www.facebook.com/" target="_blank"><ImFacebook color="#666" size={18}/></a>
                                </div>
                                <div className="mx-2">
                                <a href="https://br.pinterest.com/" target="_blank"><ImPinterest color="#666" size={18}/></a>
                                </div>
                                <div className="mx-2">
                                <a href="https://twitter.com/i/flow/login" target="_blank"><ImTwitter color="#666" size={18}/></a>
                                </div>
                                <div className="mx-2">
                                    <ImGooglePlus color="#666" size={20}/>
                                </div>
                                <div className="mx-2">
                                <a href="https://www.instagram.com/" target="_blank"><RiInstagramLine color="#666" size={19}/></a>

                                </div>

                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 mt-5">
                            <div className="col">
                                <p className="description">Description</p>
                                <ul>
                                    <li>Using energy and natural resources responsibly</li>
                                    <li>Maintaining biodiversity</li>
                                    <li>Respecting regional environmental balances</li>
                                    <li>Enhancing soil fertility</li>
                                    <li>Preserving water quality</li>
                                    <li>Promoting animal health and welfare</li>
                                    <li>Catering for animals' specific needs</li>
                                </ul>
                            </div>
                            <div  className="col mt-4 menudesc">
                                <span>Description</span>
                                <hr/>
                                <span>Additional Information</span>
                                <hr/>
                                <span>Review (2)</span>
                                <hr/>
                            </div>
                        </div>

                <Title className="d-flex justify-content-center">Related Products</Title>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center mt-5 g-4 mb-5 text-center">
                    <div className="col ">
                        <CardShop
                        title="Salad"
                        image={lettuce} alt="lettuce"
                        price={3.20}
                        />
                    </div>
                    <div className="col">
                        <CardShop title="Onion"
                        image={onion} alt="onion"
                        price={3.20}
                        />
                    </div>
                    <div className="col">
                        <CardShop
                        title="Bean"
                        image={bean} alt="bean"
                        price={3.50}
                        />
                    </div>
                    <div className="col">
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