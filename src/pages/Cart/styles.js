import styled from 'styled-components';
import bannercart from '../../assets/bannercarrinho.jpg';

export const BannerCart = styled.section`
    background-image: url(${bannercart});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    background-position: center;
    color: white;

`;

export const CartContainer = styled.section`
    .bg-color{
        background-color: #d2ffea;
        font-family: roboto,sans-serif;
        font-size: 14px;
        border-color: inherit;
    }

    thead{
        vertical-align: middle;
        text-align: center;
    }

    .align{
        text-align: center;
        vertical-align: middle;
        text-align: center;
    }

    input{
        background-color: transparent;
        border-radius: 15px;
        border: 1px solid #97ae76;
        border-radius: 15px;
        width: 70px;
        height: 30px;
        border-color:#97ae76;
    }
   

    .products{
        border: 1px solid #3333;
    }
    .pad{
        padding: 30px;
    }
    .text{
        font-family: playfair display,serif;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .table{
        display: table;
        border: 2px solid #3333;
        border-collapse: collapse;
    }
`;

export const Product = styled.p`
    font-family: playfair display,serif;
    font-style: normal;
    font-weight: 100;
`;

export const TitleCart= styled.h2`
    font-family: 'Playfair Display', serif;
    color: white;
    text-align: center;
    align-items: center;
`;


export const Button = styled.button`
    background-color: white;
    border-radius: 25px;
    color: #7e975a;
    padding: 12px 29px;
    border-color: #97ae76;
    text-align: center;
    font-family: inherit;

`;

export const Button2 = styled.button`
    background-color: #7e975a;
    border-radius: 25px;
    color: white;
    padding: 12px 29px;
    border-color: #97ae76;
    text-align: center;
    font-family: inherit;

`;
