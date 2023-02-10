import styled from 'styled-components';
import bannerBackground from '../../assets/banner.jpg';



export const BannerContainer = styled.section`
    background-image: url(${bannerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center top;
    position: relative;
    height: 80vh;
    background-position: center;

    .menu{
        color: transparent;
    }
    .text-color{
        color: #666;
    }
    li{
        margin-right: 12px;
    }
`;

export const Text = styled.div`
    color: #666;

`;

export const ContainerMobile = styled.div`

svg{
    display: inline-block;
}
.color{
    background: rgba(0,0,0,.05);
    color: rgba(0,0,0,.7);
    font-size: 14px;
    border: #666;
}
.text-mobile{
    font-family: roboto,sans-serif;
    font-size: 14px;;
    }

button{
    border: none;
}


`;
export const Name = styled.span`
color: rgba(0,0,0,.3);
font-size: 14px;
`;