import './styles'
import {Titles} from './styles';


const Title  = ({title, align='center'}) =>(
    <Titles className={`py-5 text-${align}`}>
        <h3>{title}</h3>
    </Titles>
);

export default Title;