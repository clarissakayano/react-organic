import styled from 'styled-components';
import bannercontact from '../../assets/bannercontact.jpg';


export const BannerContact = styled.section`
    background-image: url(${bannercontact});
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    color: white;
`;

export const TitleContact= styled.h2`
    font-family: 'Playfair Display', serif;
    color: white;
    text-align: center;
    align-items: center;
    margin-top: 10px;
`;

export const ContactContainer = styled.h2`
 .icon-color{
    color: #97ae76;
 }
`;

export const Button = styled.button`
    background-color: #97ae76;
    border-radius: 25px;
    color: white;
    padding: 0 37px;
    line-height: 46px;
    border-color: #97ae76;
    text-align: center;

     &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }

`;