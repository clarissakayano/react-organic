import styled from "styled-components";
import folhas from "../../assets/folhas.jpg";
import orange from "../../assets/bannerhome3.jpg";

export const Text2 = styled.h2`
    font-family: 'Playfair Display', serif;
`;

export const Text = styled.h3`
    font-family: 'Playfair Display', serif;

`;

export const BannerContainer = styled.section`
    background-image: url(${folhas});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;

    background-position: center;

    font-family: 'Playfair Display', serif;
    color: white;

`;


export const BannerContainer2 = styled.section`
    background-image: url(${orange});
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;

    background-position: center;

    font-family: 'Playfair Display', serif;
    color: white


`;




export const Button = styled.button`
    background-color: #97ae76;
    border-radius: 25px;
    color: white;
    padding: 0 37px;
    line-height: 46px;
    border-color: #97ae76;
    text-align: center;

`;