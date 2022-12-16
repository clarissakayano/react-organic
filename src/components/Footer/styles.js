import styled from "styled-components";




export const FooterContainer = styled.section`
    background-color: #edf2f5;
    list-style: none;

#bg-button {
    background-color: white;
    border-radius: 25px;
    align-items: center;

}

input {
    background-color: transparent;
}

ul {
    list-style: none;
    display: inline-block;
    padding-left: 0px;
    font-family: roboto,sans-serif;
    font-weight: 200;
   }

   li{
    color: #666;
    margin-bottom: 16px;
   }
`;

export const TitleFooter = styled.h3`
    font-family: roboto, sans-serif;
`;

export const List = styled.div`
    margin-bottom: 2px;
    font-family: 'Open Sans';
    align-items: flex-start;
`;


export const Button = styled.button`
    background-color: #97ae76;
    border-radius: 50%;
    color: white;
    padding: 0 15px;
    line-height: 45px;
    border-color: #97ae76;
    text-align: center;

`;

export const Title= styled.h4`
    font-family: roboto,sans-serif;
    font-size: 14px;
`;

export const FooterEnd = styled.section`
   background-color: #222;
   color: #666;
   font-family: roboto,sans-serif;
   list-style: none;
   padding: 20px 0;

   #copy{}

   .mr{
    margin-right: 0px 20px 16px;
   }

   .copy-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}

   @media (max-width: 991px){
    .flex.multi-row-sm {
    flex-wrap: wrap;
    }
}

    @media (max-width: 991px){
    .copy-right{
    flex-direction: column-reverse;
}
   }

`;


