// import components here
import Home from "./pages/home";
import Home2 from "./pages/home2";
import Profile from "./pages/profile";
import DetailProduct from "./pages/detailProduct";
import Cart from "./pages/cart";
import Admin from "./pages/admin";
import Product from "./pages/product";
import Topping from "./pages/topping";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    // code inside div
    <Router>
        
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home2/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/detailProduct" element={<DetailProduct/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path="/topping" element={<Topping/>}/>
      </Routes>
    </Router>
  );
}

export default App;