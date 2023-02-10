import styled from 'styled-components';


export const RadiusCard = styled.div`
    background-color: rgb 245;
`;


export const RadiusCards = styled.img`
    border-radius: 50%;
    padding: 70px;

    @media (max-width: 768px) {
        padding: 30px;
        border-radius:50%;
    };
    @media (min-width: 992px) {
        padding: 35px;
        border-radius:50%;
    };
`;

export const Radius = styled.div`
    border-style: none;
    font-family: 'Playfair Display', serif;
    font-size: 23px;

`;

export const Sub= styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;
