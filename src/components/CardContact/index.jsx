import {Card2, Text} from './styles'

const CardContact = ({icon, text, description}) => (
    <Card2 className="container d-flex flex-column mb-3 py-4">
        <div className="icon-color d-flex flex-column align-items-center">{icon}</div>
        <div className='card-body d-flex flex-column align-items-center'>
            <Text className="card-text mb-2">{description}</Text>
        </div>
    </Card2>
);



export default CardContact;