import styled from "styled-components";
import folhas from "../../assets/folhas.jpg";
import orange from "../../assets/bannerhome3.jpg";



export const Main = styled.section`


h3:before{
    content: '';
    width: 50px;
    height: 1px;
    background-color: #e6e6e6;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
}

`;

export const Text2 = styled.h2`
    font-family: 'Playfair Display', serif;
`;

export const Text = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 35px;

`;
export const BannerContainer = styled.section`
    background-image: url(${folhas});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;

    background-position: center;

    font-family: 'Playfair Display', serif;
    color: white;

    .absolute1{
        position: absolute;
        left: 0%;
        top: 0px;
}

    .relative{
        position: relative;
    }
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