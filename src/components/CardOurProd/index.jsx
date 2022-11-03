import {Card2} from './styles'

const CardOurProducts = ({image, text, description, description1}) => (

    <Card2 className="container mb-3" >
    <img src={image} className="card-img-top img-fluid" alt={text} />
        <div className='card-body d-flex flex-column align-items-center'>
            <p className="card-text">{description}</p>
            <p className="card-text">{description1}</p>
        </div>

    </Card2>
);



export default CardOurProducts;