import styled from "styled-components";




export const FooterContainer = styled.section`
    background-color: #F5F5F5;
    list-style: none;

#bg-button {
    background-color: white;
    border-radius: 25px;
    align-items: center;

}

input {
    background-color: transparent;
}
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

export const FooterEnd = styled.section`
   background-color: #222;
   color: #666;
   font-family: roboto,sans-serif;
   list-style: none;
   padding: 20px 0;

   ul li{
    display: inline-block;
    padding-left:0px;
    
   }

   .copy-right-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

   @media (max-width: 991px){
    .flex.multi-row-sm {
    flex-wrap: wrap;
    }
}

    @media (max-width: 991px){
    .copy-right-inner {
    flex-direction: column-reverse;
}
   }


`;

