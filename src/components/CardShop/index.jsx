import {Title, Shop} from './styles'

const CardShop = ({image, title, price}) => (

    <Shop className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <Title className="card-text">{title}</Title>
            <p className="mb-8">{`$${price.toFixed(2)}`}</p>
        </div>
    </Shop>
    );

export default CardShop;