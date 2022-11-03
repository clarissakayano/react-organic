import './styles';
import { RadiusCards, Sub} from './styles';
import {Radius} from './styles';


const CardAbout  = ({image, description,description1 ,text}) => (

    <Radius className="container" >
        <RadiusCards src={image} className="card-img-top img-fluid" alt={text} />
            <div className='card-body d-flex flex-column align-items-center'>
                <p className="card-text">{description}</p>
                <Sub className="card-text">{description1}</Sub>
            </div>

    </Radius>
);

export default CardAbout;