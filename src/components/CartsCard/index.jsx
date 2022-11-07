import './styles';
import {CardCart}from './styles'




const CartCards = ({image, title, weight,quantity,price,total}) =>(
    <>
            <CardCart className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Weight</p>
                    <p className="card-text">Quantity</p>
                    <p className="card-text">Price</p>
                    <p className="card-text">Total</p>
                </div>
                </div>
            </div>
            </CardCart>
    </>
);

export default CartCards;