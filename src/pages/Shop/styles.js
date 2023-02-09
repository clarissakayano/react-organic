import styled from 'styled-components';
import bannerShop from '../../assets/bannershop.jpg';

export const BannerShop = styled.section`
    background-image: url(${bannerShop});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    color: white;

`;

export const ShopContainer = styled.section`

`;


export const TitleShop= styled.h1`
    font-family: 'Playfair Display', serif;
    color: white;
    text-align: center;
    align-items: center;
    font-size: 35px;
`;

export const AboutContainer= styled.div`
`;

export const MainTitles= styled.h3`
    font-family: 'Playfair Display', serif;
    color: black;
`;
