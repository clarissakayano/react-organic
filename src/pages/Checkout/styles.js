import styled from 'styled-components';
import  bannercheckout from '../../assets/checkout.jpg';


export const BannerCheckout = styled.section`
background-image: url(${bannercheckout});
background-repeat: no-repeat;
background-size: cover;
height: 300px;
background-position: center;
color: white;

`;


export const TitleCheck= styled.h1`
    font-family: 'Playfair Display', serif;
    color: white;
    text-align: center;
    align-items: center;
    font-size: 35px;
`;
export const MainCheckout = styled.div`


.info {
    line-height: 28px;
    background-color: #f5f5f5;
    border-top: 2px solid #ccc;
    padding: 10px 15px;
    margin-bottom: 30px;
    transition: all .3s ease-in-out;
}

.green {
    color: #97ae76;
    font-family: roboto,sans-serif
}

input {
    padding: 10px;
    border-radius: 0%;
}
#inputState {
    padding: 10px;
    border-radius: 0%;
}

label {
    color: #666;
    font-weight: 400;
    margin-bottom: 14px;
}

td, th {
    padding: 25px 30px;
    font-family: roboto,sans-serif;
    font-size: 18px;

}
.text {
    font-family: roboto,sans-serif;
}
.pay{
    color: #999;;
}
.grey {
    color: #666;
    font-family: roboto,sans-serif;
    font-size: 14px;
}

`;

export const Text = styled.h4`
     font-family: playfair display,serif;
`;

export const ButtonPlace = styled.button`
    display: inline-block;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 25px;
    padding: 10px 25px;
    border-color: #97ae76;
    text-align: center;
    font-family: roboto,sans-serif;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }
    @media (max-width: 991px) {
        padding: 0 30px;
        line-height: 36px;
     }

`;

