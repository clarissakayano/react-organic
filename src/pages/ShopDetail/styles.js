import styled from 'styled-components';
import bannerShop from '../../assets/bannershop.jpg';

export const BannerShop = styled.section`
    background-image: url(${bannerShop});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    background-position: center;
    color: white;

`;

export const ShopContainer = styled.section`

.product {
    font-family: playfair display,serif;
    font-size: 35px;
}
.price {
    font-family: roboto,sans-serif;
    font-size: 18px;
    margin-bottom: 0 0 15px;
}

h3:after {
    content: '';
    width: 50px;
    height: 1px;
    background-color: #e6e6e6;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
}

.border {
    border-color: #7e975a;
    border-width: 1px;
    border-top: 20px ;
    border-bottom: 1px;
    padding: 10px 30px;
}

.description {
    font-family: roboto,sans-serif;
    font-size: 18px;
    padding-left: 10px;
}
.menudesc {
    font-family: roboto,sans-serif;
    font-size: 18px;
}

ul {
    font-size: 14px;
    font-family: roboto,sans-serif;
}

.box{
    display: inline-block;
}

`;
export const Color = styled.span`
    font-family: roboto,sans-serif;
    color: #7e975a;
    font-size: 14px;
`;
export const Categ =styled.span`
    font-family: roboto,sans-serif;
    color: #333;
    font-size: 14px;
`


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

export const Title= styled.h3`
    display: block;
    font-family: playfair display,serif;
    font-size: 35px;
    font-weight: 400;
    padding: 20px 0 25px;
    margin: 35px auto 50px;
    display: inline-block;
    position: relative;
    text-align: center;
    color: #333;
`;

export const ButtonSub = styled.button`
    padding: 0;
    background-color: transparent;
    width: 48px;
    height: 48px;
    font-size: 18px;
    transition: all .3s ease-in-out;
    float: left;
    border: 1px solid #97ae76;
    text-align: center;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }



`;

export const ButtonAdd = styled.button`
 padding: 0;
    background-color: transparent;
    width: 48px;
    height: 48px;
    font-size: 18px;
    transition: all .3s ease-in-out;
    float: left;
    border: 1px solid #97ae76;
    text-align: center;
    margin-right: 10px;

    &:hover, i{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }

`;

export const ButtonCart = styled.button`
    display: inline-block;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    padding: 10px 25px;
    border-color: #97ae76;
    text-align: center;
    font-family: roboto,sans-serif;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }
`;

export const Buttonlove = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    font-size: 18px;
    transition: all .3s ease-in-out;
    float: left;
    border: 1px solid #97ae76;
    text-align: center;
    color: #7e975a;

    &:hover, i{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }

`;


