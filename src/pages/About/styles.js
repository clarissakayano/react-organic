import styled from 'styled-components';
import bannerAbout from '../../assets/banner-about.jpg';
import about2 from '../../assets/bannernumber.jpg';




export const BannerAbout = styled.section`
    background-image: url(${bannerAbout});
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    color: white;
`;

export const BannerAbout2 = styled.section`
    background-image: url(${about2});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: darken;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: center;

    p{
    font-family: inherit;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4px;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 50%);

}

    span{
    font-family: inherit;
    font-size: 23px;
    text-align: center;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 50%);
    }
`;


export const TitleAbout= styled.h1`
    font-family: 'Playfair Display', serif;
    color: white;
    font-size: 35px;
    margin-top: 10px;
`;

export const AboutContainer= styled.div`
`;

export const MainTitles= styled.h3`
    font-family: 'Playfair Display', serif;
    color: black;
    font-size: 35px;
    color: #333;
    margin-bottom: 15px;

`;

export const Who = styled.div`

p{
    font-family: roboto,sans-serif;
    font-size: 14px ;
    color: #666;
    line-height: 26px;
}
img {
    object-fit: cover;
}
`;

export const MainTitle= styled.h3`
    font-family: 'Playfair Display', serif;
    color: black;
    text-align: end;
    font-size: 35px;
    color: #333;
    margin-bottom: 15px;
    margin-right: 20px;

`;

export const What = styled.div`


p{
    font-family: roboto,sans-serif;
    text-align: end;
    margin-left: 40px;
    font-size: 14px ;
    color: #666;
    line-height: 26px;
    padding: 0px;
}
img {
    object-fit: cover;
}

 @media (max-width: 767px){
    flex-direction: column-reverse;
 }
 `;