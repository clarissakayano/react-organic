import {Card2} from './styles'

const CardContact = ({icon, text, description}) => (
    <Card2 className="container mb-3 py-4" >
        {icon}
        <div className='card-body d-flex flex-column align-items-center'>
            <p className="card-text">{description}</p>
        </div>
    </Card2>
);



export default CardContact;