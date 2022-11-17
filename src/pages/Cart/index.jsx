import {BannerCart, TitleCart, CartContainer, Button, Button2, Product} from './styles';
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderComp from "../../components/HeaderComp";
import CardShop from "../../components/CardShop";
import lettuce from "../../assets/lettuce.jpg";
import apple from "../../assets/apple.jpg";
import { RiCloseCircleFill} from "react-icons/ri";






const Cart =() => (
    <>
        <HeaderComp />
        <CartContainer className="mb-5">
            <BannerCart className='flex-grow-1'>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col">
                            <TitleCart className="mt-5">Shop</TitleCart>
                        </div>
                    </div>
                </div>
            </BannerCart>
            <div className="container mt-5">
                <table className="table">
                <thead className="bg-color">
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col" className="pad"></th>
                    <th scope="col">Weight</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-group align">
                    <tr>
                        <th scope="row" className="align">
                            <div className="ratio ratio-21x9 pad mb-4 mt-4">
                            <div>
                                <img className="products img-fluid" src={lettuce} width="100px"/>
                            </div>
                            </div>
                        </th>
                        <th>
                            <td>
                                <Product className="mt-4 align">Salad</Product>
                            </td>
                        </th>
                        <td className="pad">0.4 kg</td>
                        <td className="pad">
                            <input className="btn-color" placeholder='1'></input>
                        </td>
                        <td className="pad">$2.26</td>
                        <td className="pad">$2.26</td>
                        <td className="pad"><RiCloseCircleFill color='#97ae76' size={20}/></td>
                    </tr>

                    <tr>
                        <th scope="row" className="align">
                            <div className="ratio ratio-21x9 pad mb-4 mt-4">
                            <div>
                                <img className="products img-fluid" src={apple} width="100px"/>
                            </div>
                            </div>
                        </th>
                        <th>
                            <td>
                                <Product className="mt-4 align">Salad</Product>
                            </td>
                        </th>
                        <td className="pad">0.4 kg</td>
                        <td className="pad">
                            <input className="btn-color" placeholder='1'></input>
                        </td>
                        <td className="pad">$2.26</td>
                        <td className="pad">$2.26</td>
                        <td className="pad"><RiCloseCircleFill color='#97ae76' size={20}/></td>
                    </tr>

                </tbody>
                </table>
                <div>
                <div className="row">
                    <div className="col d-flex justify-content-evenly">
                        <div><Button>Cuppon Code</Button></div>
                        <div><Button2>APPLY COUPON</Button2></div>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Button>UPDATE CARD</Button>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div  className="col col-md-8">
                <h3 className="text">Cart Total</h3>
            <table className="table table-bordered">
                <tbody className="col md-8">
                <tr>
                    <td>Subtotal</td>
                    <td>$</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$</td>
                </tr>
            </tbody>
            </table>
            <div className="mb-5">
                <Button2>PROCEED TO CHECKOUT</Button2>
            </div>
            </div>
            </div>
            </div>
        </CartContainer>
        < Footer/>
    </>
);

export default Cart;