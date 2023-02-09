import './styles';
import { RadiusCards} from './styles';
import {Radius} from './styles';


const CardVeg  = ({image, description, text}) => (

    <Radius className="container" >
        <RadiusCards src={image} className="d-flex img-fluid card-img-top" alt={text} />
            <div className='card-body d-flex flex-column align-items-center'>
                <p className="card-text">{description}</p>
            </div>

    </Radius>
);

export default CardVeg;