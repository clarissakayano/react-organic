import styled from 'styled-components';
import  bannerlogin from '../../assets/login.jpg';


export const BannerLogin = styled.section`
background-image: url(${bannerlogin});
background-repeat: no-repeat;
background-size: cover;
height: 300px;
background-position: center;
background-color: rgba(0, 0, 0, 0.5);
background-blend-mode: darken;
color: white;

`;


export const TitleLogin= styled.h1`
    font-family: 'Playfair Display', serif;
    color: white;
    text-align: center;
    align-items: center;
    font-size: 35px;
`;
export const MainLogin = styled.div`



.grey {
    color: #666;
    font-family: roboto,sans-serif;
    font-size: 14px;
}

.formstyle{
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    box-shadow: none;
    border-radius: 0;
    transition: all .3s ease-in-out;
&:hover{
    background-color: #97ae76;
    color: #fff;
}
}
.form-control {
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    box-shadow: none;
    border-radius: 0;
    transition: all .3s ease-in-out;
    &:hover{
    background-color: #97ae76;
    color: #fff;
}
}

#form{
    text-align: -webkit-center;
}
label{
    color: #999;
}
.margin{
    margin-left:70px;
}

a:hover {
  color: #97ae76;
}

a:active {
  color: #97ae76;
}
`;

export const Text = styled.h4`
     font-family: playfair display,serif;
`;

export const Submit = styled.button`
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
export const Title =styled.p`
    font-size: 25px;
    font-family: roboto,sans-serif;
    text-align: center;
    color: black;
    margin-bottom: 22px;
`;

export const ButtonSubmit = styled.button`
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
    `