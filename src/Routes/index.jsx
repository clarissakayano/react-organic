import { BrowserRouter, Routes as Router, Route} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop";
import ShopCart from "../pages/Shop";
import Contact from "../pages/Contact";




const Routes =() => (
    <BrowserRouter>
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/produtos" element={<Shop />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
        </Router>
    </BrowserRouter>
);

export default Routes;