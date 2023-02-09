import styled from 'styled-components';
import bannerAbout from '../../assets/banner-about.jpg';
import about2 from '../../assets/bannernumber.jpg';




export const BannerAbout = styled.section`
    background-image: url(${bannerAbout});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    color: white;
`;

export const BannerAbout2 = styled.section`
    background-image: url(${about2});
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    background-position: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    padding: 43px 0;
`;


export const TitleAbout= styled.h1`
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
