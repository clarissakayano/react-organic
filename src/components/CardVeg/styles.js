import styled from 'styled-components';


export const RadiusCard = styled.div`
    background-color: rgb 245;
`;


export const RadiusCards = styled.img`
    border-radius: 50%;

    @media (max-width: 576px){
        padding: 50px;
    }
    @media ( min-width:1024px){
        padding: 25px;
    }
    @media (min-width:1025) and ( max-width: 2560px){
        padding: 10px;
    }

`;

export const Radius = styled.div`
    border-style: none;

    font-family: 'Playfair Display', serif;
    font-size: 23px;
`;