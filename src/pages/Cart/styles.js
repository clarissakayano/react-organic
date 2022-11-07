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
    }
    .btn-color{
        background-color: transparent;
        border-radius: 15px;
        width: 80px;
        border-color: #7e975a ;
    }
    .products{
        border: #333;
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
        border: 2px solid #3333;
        border-collapse: collapse;
    }
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
