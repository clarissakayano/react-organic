import styled from "styled-components";

export const Shop = styled.div`
    background-color: #d2ffea;
`;

export const Title = styled.h3`
    font-family: 'Playfair Display', serif;

`;

export const Cover = styled.div`
  background-image: ${(props) => `url(${props.image})`};;
  background-size: contain;
  background-position: center center;
  aspect-ratio: 2/ 2;
display:flex;
  margin-top: 0px;
  padding: 50%;
  overflow: hidden;
`;