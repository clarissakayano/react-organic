import { BrowserRouter, Routes as Router, Route} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop";
import ShopCart from "../pages/Shop";
import Contact from "../pages/Contact";
import ShopDetail from "../pages/ShopDetail";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";




const Routes =() => (
    <BrowserRouter>
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/salad" element={<ShopDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Shop />} />
        </Router>
    </BrowserRouter>
);

export default Routes;