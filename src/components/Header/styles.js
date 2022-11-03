import styled from 'styled-components';
import bannerBackground from '../../assets/banner.jpg';



export const BannerContainer = styled.section`
    background-image: url(${bannerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;
    background-position: center;

    .menu{
        color: transparent;
    }
    .text-color{
        color: #666;
    }
    li{
        margin-right: 12px;
    }
`;

export const Text = styled.div`
    color: #666;

`;

export const ContainerMobile = styled.div`


`;