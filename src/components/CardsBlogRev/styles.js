import styled from "styled-components";

export const CardBlog = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #F5F5F5;
    border: none;

    .card-footer{
    background-color: #F5F5F5;
    border-top: none;
}
.card-title {
    font-family: playfair display,serif;
    color: #333;
    font-size: 18px;
}

.color-text {
    color: #999999;
    font-family: roboto,sans-serif;
    font-size: 14px;;
}
.text-gray {
  color: #666;
  font-size: 14px;
}

`;

export const Cover = styled.div`
   background-image: url(${(props) => props.image});
   background-position:center;
   background-size:cover;
`;