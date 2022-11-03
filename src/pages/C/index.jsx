import {Link} from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderCart from "../../components/HeaderCart";
import Title from "../../components/Title";

const Cart =() => (
    <>
        <HeaderCart />

        <main>


            <Title title="Carrinho" />
            <Link to="/">Voltar para Inicial</Link>
            <Link to="/about">Quem Somos</Link>
        </main>

        <Footer />
    </>
);

export default Cart;
