import { Link } from 'react-router-dom';
import {Title, Shop, Cover} from './styles'

const CardShop = ({image, title, price}) => (
    <Link to="/shop/salad">
    <Shop className="card w-100 img-fluid effect">
    <Cover
          className="px-4 zoom"
          image={image}
        >
          <div />
    </Cover>
    <div className="card-body">
        <Title className="card-text">{title}</Title>
        <p className="mb-8">{`$${price.toFixed(2)}`}</p>
    </div>
    </Shop>
    </Link>
    );

export default CardShop;