import styled from 'styled-components';
import bannercart from '../../assets/bannercarrinho.jpg';

export const BannerCart = styled.section`
    background-image: url(${bannercart});
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    background-size: cover;
    height: 250px;
    background-position: center;
    color: white;

`;
export const TableStyle =styled.div`
.border{
    border: none;
}

.table-style>:not(caption)>*>* {
    background-color: white;
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
`;

export const CartContainer = styled.section`


tbody{
    font-family: roboto, sans-serif;
}

.container:before, .container:after {
    content: " ";
    display: table;
}

*:before {
    box-sizing: border-box;
}

    .bg-color{
        background-color: #d2ffea;
        font-family: roboto,sans-serif;
        font-size: 14px;
        border-color: inherit;
    }

    thead{
        vertical-align: middle;
        text-align: center;
    }

    .align{
        text-align: center;
        vertical-align: middle;
        text-align: center;
    }

    .inputcart{
        background-color: transparent;
        border-radius: 15px;
        border: 1px solid #97ae76;
        border-radius: 15px;
        width: 70px;
        height: 30px;
        border-color:#97ae76;
    }


    .products{
        border: 1px solid #3333;
    }
    .pad{
        padding: 30px;
    }
    .text{
        font-family: playfair display,serif;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .table{
        display: table;
        border: 1px solid #3333;
        border-collapse: collapse;
    }
    .table-1 {
        font-family: playfair display,serif;
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        text-align: left;
    }
    .price{
        font-family: roboto,sans-serif;
        font-size: 16px;
        padding: 14px 30px;
        vertical-align: middle;
    }
    .price-1{
        font-family: roboto,sans-serif;
        font-size: 16px;
        vertical-align: middle;
    }

    .table-text {
    content: attr(data-title) ": ";
    float: left;
    display: none;
    font-family: playfair display,serif;
    font-size: 18px;
    }

    .text-cart {
    font-family: playfair display,serif;
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    text-align: left;
    }

    .cart-float {
        float: right;
    }
    .display-grid {
        display: grid;
    }
    th{

text-align:start;
}

td{

    text-align:end;
}


    tfoot {
        .row-wrap {
	    flex-flow: row wrap;
}
    }

    

// @media screen and (max-width: 991px){
 //   .table tbody td{display: flex;}
//}
`;

export const Text = styled.p`
    font-family: playfair display,serif;
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    text-align: left;
    padding: 14px 30px;

`;

export const TitleCart= styled.h2`
    font-family: 'Playfair Display', serif;
    color: white;
    margin-top: 10px;
`;

export const TableTitle = styled.p`
    font-family: roboto , sans-serif;
    font-size: 14px;
    text-align: right;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;

`;
export const Border = styled.div`
border-bottom: 1px solid;
border-left: 1px solid;
border-right: 1px solid;
`;

export const Input = styled.input`
    height: auto;
    font-family: roboto, sans-serif;
    text-align: center;
    border-radius: 25px;
    transition: all .3s ease-in-out;
    border: 1px solid #ccc;
    padding: 10px 9px;
    &:focus{
        border-color: #66afe9;
        outline: none;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }
`


export const Button2 = styled.button`
    display: inline-block;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 25px;
    padding: 10px 25px;
    border-color: #97ae76;
    text-align: center;
    font-family: roboto,sans-serif;


    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }
`;


export const Button3 = styled.button`
    display: inline-block;
    background-color: transparent;
    color: #97ae76;
    border: 2px solid #97ae76;
    border-radius: 25px;
    padding: 10px 25px;
    align-self: center;
    text-align: center;
    font-family: inherit;
    font-family: roboto,sans-serif;
    width: 100%;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
        transition: all .3s ease-in-out;
    }
    `;


export const ButtonCheck = styled.button`
    display: block;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 25px;
    padding: 12px 37px;
    border-color: #97ae76;
    text-align: center;
    font-family: roboto,sans-serif;
`;


export const Product = styled.p`
font-family: playfair display,serif;
font-style: normal;
font-size: 18px;
`;