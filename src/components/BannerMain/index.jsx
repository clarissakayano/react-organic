import styled from 'styled-components';
import { BannerMainContainer } from '../Header/styles';



const BannerContainer = ({image, text, description}) =>

    <BannerMainContainer className="container">
        <img src={image} alt={text} />
        <div>
            <p>{description}</p>
        </div>

    </BannerMainContainer>

;

export default BannerContainer;