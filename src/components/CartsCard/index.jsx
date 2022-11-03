import './styles';
import {CardCart}from './styles'




const CartCards = ({image, title, weight,quantity,price,total}) =>(
    <>
            <CardCart class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={image} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Title</h5>
                    <p class="card-text">Weight</p>
                    <p class="card-text">Quantity</p>
                    <p class="card-text">Price</p>
                    <p class="card-text">Total</p>
                </div>
                </div>
            </div>
            </CardCart>
    </>
);

export default CartCards;