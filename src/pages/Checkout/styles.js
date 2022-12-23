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


`;

export const Text = styled.h4`
     font-family: playfair display,serif;
`;