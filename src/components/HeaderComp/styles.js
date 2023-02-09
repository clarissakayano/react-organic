import styled from 'styled-components';

export const Container = styled.section`
    .menu{
        color: transparent;
    }
    .text-color{
        color: #666;
        font-weight: 700;
        font-family: roboto,sans-serif;
        font-size: 14px;
    }
    li{
        margin-right: 12px;
        color: red;
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