import {BannerCart, TitleCart, CartContainer} from './styles';
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderComp from "../../components/HeaderComp";
import CardShop from "../../components/CardShop";
import lettuce from "../../assets/lettuce.jpg";
import apple from "../../assets/apple.jpg";





const Cart =() => (
    <>
        <HeaderComp />
        <CartContainer>
            <BannerCart className='flex-grow-1'>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col">
                            <TitleCart className="mt-5">Shop</TitleCart>
                        </div>
                    </div>
                </div>
            </BannerCart>
            <section className="containermt-5 d-none d-md-block">
                <TitleCart className="row py-3 fw-bolder">
                    <div className='col-3'>
                        Product
                    </div>
                    <div className='col-2'>
                        Quantity
                    </div>
                    <div className='col-2'>
                        Price
                    </div>
                    <div className='col-2'>
                        Total
                    </div>
                    <div className='col-1'>
                    </div>
                </TitleCart>
                <div className='container'>

                </div>



            </section>
        </CartContainer>
        < Footer/>
    </>
);

export default Cart;