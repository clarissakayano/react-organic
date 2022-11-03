import {Title1} from './styles'

const TitleBanner =({title, bgimage}) =>(

    <div>
        <Title1>{title}</Title1>
        <img src={bgimage} className="img-fluid" alt="..." />
    </div>

);

export default TitleBanner;

