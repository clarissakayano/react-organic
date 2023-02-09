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
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    background-size: cover;
    min-height: auto;
    background-position: center;
    font-family: 'Playfair Display', serif;
    color: white;

    @media (min-width:1200px) {
    position: relative;
    min-height: 500px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    padding: 100px 0;

}

    h3{
    color: white;
    font-size: 23px;
    text-align: center;
    padding-top: 50px;

@media (max-width:991px) {
    font-size: 18px;

}
    }
`;

export const TitleH = styled.h2`
font-size: 70px;

@media (max-width:991px) {
    font-size: 36px;

}
@media (min-width:992px) {
    font-size: 70px;

}
`;

export const BannerContainer2 = styled.section`
    background-image: url(${orange});
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;

    background-position: center;

    font-family: 'Playfair Display', serif;
    color: white;


`;




export const Button = styled.button`
    font-family: roboto,sans-serif;
    font-size: 14PX;
    background-color: #97ae76;
    border-radius: 25px;
    color: white;
    padding: 0 37px;
    line-height: 46px;
    border-color: #97ae76;
    text-align: center;

`;