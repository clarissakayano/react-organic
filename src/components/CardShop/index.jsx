import { Link } from 'react-router-dom';
import {Title, Shop} from './styles'

const CardShop = ({image, title, price}) => (
    <Link to="/detalhes">
    <Shop className="card">
        <img src={image} className="img-fluid card-img-top" alt="..." />
        <div className="card-body">
            <Title className="card-text">{title}</Title>
            <p className="mb-8">{`$${price.toFixed(2)}`}</p>
        </div>
    </Shop>
    </Link>
    );

export default CardShop;