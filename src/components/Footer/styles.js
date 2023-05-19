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
#btn{
    position: absolute;
}
`
export const Style =styled.p`
color: #666;
font-size: 14px;
font-family: roboto,sans-serif;
margin-right: 40px;
`;

export const TitleFooter = styled.h3`
    font-family: roboto, sans-serif;
`;

export const List = styled.div`
    margin-bottom: 2px;
    font-family: 'Open Sans';
    align-items: flex-start;
`;



export const Title= styled.h4`
    font-family: roboto,sans-serif;
    font-size: 18px;
`;

export const FooterEnd = styled.section`
   background-color: #222;
   color: #666;
   font-family: roboto,sans-serif;
   list-style: none;
   padding: 20px 0;

   #color{
    color: #666;;
   }

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

export const BorderInput = styled.section`

border: none;
&:focus{
        border-color: #97ae76;
        outline: none;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }




`;


export const InputColor = styled.input`
    font-family: roboto, sans-serif;
    border-radius: 25px;
    transition: all .3s ease-in-out;
    border: 1px solid #ccc;
    padding: 10px 9px;
    &:focus{
        border-color: #97ae76;
        outline: none;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
        &:before {
    content:
   svg;
  }

    }
`

export const Button = styled.button`
    background-color: #97ae76;
    border-radius: 50%;
    color: white;
    padding: 0 15px;
    line-height: 45px;
    border-color: #97ae76;
    text-align: center;
    position: relative;
    :hover{
        background-color: #8fa66d;
        color: white;
    }
  

    >svg{
        height: 20px;
        width: 20px;
    }
   
`;


export const Inp = styled.div`
font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 25px;
  background-color: transparent;
  color: rgb(51, 51, 51);
  color: #888;
  font-family: inherit;
font-size: 14px;
  textarea:focus,
  input:focus {
    outline: none;

  }

  input {
    border-radius: 0px;
    padding: 0px 15px;
    transition: all .3s ease-in-out;
  }
`
