import {BannerCart, TitleCart, CartContainer, Button2, Text, Button3, Product, TableStyle, ButtonCheck, Input} from './styles';

import HeaderComp from "../../components/HeaderComp";
import CardShop from "../../components/CardShop";
import lettuce from "../../assets/lettuce.jpg";
import apple from "../../assets/apple.jpg";
import { RiCloseCircleFill} from "react-icons/ri";
import Footer from '../../components/Footer';






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
                <div className="d-none d-lg-block">
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
                                <Text className="mt-4 align">Salad</Text>
                            </td>
                        </th>
                        <td className="pad">0.4 kg</td>
                        <td className="pad">
                            <input className="btn-color text-center inputcart" placeholder='1'></input>
                        </td>
                        <td className="pad">$2.26</td>
                        <td className="pad">$2.26</td>
                        <td className="pad"><RiCloseCircleFill color='#97ae76' size={25}/></td>
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
                                <Text className="mt-4 align">Salad</Text>
                            </td>
                        </th>
                        <td className="pad">0.4 kg</td>
                        <td className="pad">
                            <input className="btn-color text-center inputcart" placeholder='1'></input>
                        </td>
                        <td className="pad">$2.26</td>
                        <td className="pad">$2.26</td>
                        <td className="pad"><RiCloseCircleFill color='#97ae76' size={25}/></td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr className="row-col-md-4 mt-3 text-center">
                        <td >
                            <div className="mb-3 mt-3">
                                <Input placeholder="Cuppon Code"/>
                            </div>
                        </td>
                        <td colspan="2">
                            <div className="mb-3 mt-3">
                                <Button2>APPLY COUPON</Button2>
                            </div>
                            
                        </td>
                        <td></td>
                        <td></td>
                        
                        <td className="text-center" colspan="3"><Button3>UPDATE CARD</Button3></td>
                    </tr>
                </tfoot>

            </table>
            </div>

            <TableStyle className="container d-lg-none">
                <div id="border">
                <table className="table table-striped table-style">
                    <tbody>
                        <tr>
                        <th scope="col">Product:</th>
                        <td colspan="1"></td>
                        <td className="text-end"><Product>Salad</Product></td>
                        </tr>

                        <tr>
                        <th scope="row">Weight:</th>
                        <td colspan="1"></td>
                        <td className="text-end">4.4 kg</td>
                        </tr>

                        <tr>
                        <th scope="row">Quantity:</th>
                        <td colspan="1"></td>
                        <td className="text-end">
                        <input className="btn-color text-center inputcart" placeholder='1'></input>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">Price:</th>
                        <td colspan="1"></td>
                        <td className="text-end">$2.26</td>
                        </tr>
                        <tr>
                        <th scope="row">Total:</th>
                        <td colspan="1"></td>
                        <td className="text-end">$2.26</td>

                        </tr>

                        <tr>
                        <th scope="row"></th>
                        <td colspan="1"></td>
                        <td className="text-end"><RiCloseCircleFill color='#97ae76' size={20}/></td>
                        </tr>

                    </tbody>
                    <tfoot>
                    <tr colspan="1" className="row">
                        
                            <div className="d-flex justify-content-center row-cols-1 row-cols-sm-8 mx-5 mb-3 mt-3" >
                                <Input placeholder="Coupon Code"/>
                            </div>
                            <div className="row-cols-1 row-cols-sm-8 d-flex justify-content-center mx-5 mb-3">
                                <Button2 >APPLY COUPON</Button2>
                            </div>
                            <div className="row-cols-1 row-cols-sm-8 d-flex justify-content-center mx-5 mb-3">
                            <Button3 >UPDATE CARD</Button3>
                        </div>
                    </tr>
                    </tfoot>
                </table>
            </div>
            </TableStyle>
            </div>

            <div className="container">
                <h3 className="text py-3">Cart Total</h3>
                <div className="d-lg-none">
                    <table className="table">
                        <tbody >
                        <tr>
                            <th className="text-cart ">Subtotal</th>
                            <td className="price-1 text-end">$6.31</td>
                        </tr>
                        <tr>
                            <th className="text-cart">Total</th>
                            <td className="price-1 text-end">$6.31</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="mb-5">
                        <ButtonCheck>PROCEED TO CHECKOUT</ButtonCheck>
                    </div>
                    </div>

                    <div  className="col col-md-8 d-none d-lg-block">
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td><Text>Subtotal</Text></td>
                            <td className="price">$6.31</td>
                        </tr>
                        <tr>
                            <td><Text>Total</Text></td>
                            <td className="price">$6.31</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="mb-5">
                        <Button2>PROCEED TO CHECKOUT</Button2>
                    </div>
                </div>
            </div>
        </CartContainer>
        <Footer/>
    </>
);

export default Cart;